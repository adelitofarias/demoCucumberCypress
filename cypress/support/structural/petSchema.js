export const definitionsSchemaPet = {
    title: "Validar estrutura do Pet",
    type: "array",
    required: ['id', 'name', 'photoUrls', 'status'],  // Campos obrigatórios

    properties: {
        id: {
            type: 'integer',
            format: 'int64',
        },
        category: {
            type: 'object',
            properties: {
                id: {
                    type: 'integer',
                    format: 'int64',
                },
                name: {
                    type: 'string',
                },
            }
        },
        name: {
            type: 'string',
            example: 'doggie',
        },
        photoUrls: {
            type: 'array',
            items: {
                type: 'string',
                xml: {
                    name: "photoUrl"
                }
            },
            xml: {
                wrapped: true
            }
        },
        tags: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        format: 'int64',
                    },
                    name: {
                        type: 'string',
                    }
                }
            },
            xml: {
                wrapped: true
            }
        },
        status: {
            type: 'string',
            description: 'pet status in the store',
            enum: ['available', 'pending', 'sold']
        }
    }
};
