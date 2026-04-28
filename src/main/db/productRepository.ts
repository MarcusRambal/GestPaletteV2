import { db } from './database'

export const getProducts = () => {
    return db.prepare('SELECT * FROM Products').all();
};

export const createProduct = (product: any) => {
    console.log('Creating product in database:', product);
    const stmt = db.prepare(`INSERT INTO Products (name, price, label_id) VALUES (@name, @price, @label_id)`)
    const result = stmt.run({
      name: product.name,
      price: product.price,
      label_id: product.label_id ?? null
    })

    return {
      ...product,
      product_id: result.lastInsertRowid
    }
};

export const createTag = (tag: any) => {
    console.log('Creating tag in database:', tag);
    console.log('Valor de tag.name:', tag.name)
    console.log('Valor de tag.color:', tag.color)
    const repeatedTag = db.prepare('SELECT * FROM Label WHERE name = @name OR color = @color')
                      .get({ name: tag.name, color: tag.color });

    const allLabels = db.prepare('SELECT * FROM Label').all();
    console.log('Contenido actual de la tabla Label:', allLabels);

    console.log('Valor de repeatedTag:', typeof(repeatedTag), repeatedTag)
    if (repeatedTag) {
        throw new Error('Tag name must be unique');
    }

    console.log('¿Se encontro algo para name ' + tag.name + ' o color ' + tag.color + '?:', repeatedTag);


    if(!tag.name || !tag.color) {
        throw new Error('Tag name and color are required');
    }

    const stmt = db.prepare(`INSERT INTO Label (name, color) VALUES (@name, @color)`)
    const result = stmt.run({
        name: tag.name, color: tag.color
    })

    return {
        ...tag,
        label_id: result.lastInsertRowid
    }
}

export const getTags = () => {
    return db.prepare('SELECT * FROM Label').all();
}