import {
    SET_SHOP_CATEGORIES,
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    FILTER_PRODUCTS_WITH_QUERY,
} from "./types";

export function filterProductsWithQuery(fields) {
    return {
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields,
    };
}

export function filterProductsWithCategoryId(_id) {
    return {
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id,
    };
}

export function fetchShopCategories() {
    return {
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: "All",
            },
            {
                _id: 1,
                title: "Winter",
            },
            {
                _id: 2,
                title: "Spring",
            },
            {
                _id: 3,
                title: "Summer",
            },
            {
                _id: 4,
                title: "Fall",
            },
            {
                _id: 5,
                title: "Holiday",
            },
            {
                _id: 6,
                title: "Special Edition",
            },
        ],
    };
}

export function fetchShopProducts() {
    return {
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: "Winter",
                description:
                    "Get in to the season with special winter season themed playmats featuring...",
                price: 30.0,
                belongsTo: [0, 1],
                imageUrl: "http://via.placeholder.com/80x80",
            },
            {
                _id: 1,
                title: "Spring",
                description:
                    "Get in to the season with special spring season themed playmats featuring...",
                price: 30.0,
                belongsTo: [0, 2],
                imageUrl: "http://via.placeholder.com/80x80",
            },
            {
                _id: 2,
                title: "Summer",
                description:
                    "Get in to the season with special summer season themed playmats featuring...",
                price: 30.0,
                belongsTo: [0, 3],
                imageUrl: "http://via.placeholder.com/80x80",
            },
            {
                _id: 3,
                title: "Fall",
                description:
                    "Get in to the season with special fall season themed playmats featuring...",
                price: 30.0,
                belongsTo: [0, 4],
                imageUrl: "http://via.placeholder.com/80x80",
            },
            {
                _id: 4,
                title: "Halloween",
                description:
                    "Celebrate the holidays with out special Halloween themed playmat.",
                price: 45.0,
                belongsTo: [0, 4, 5],
                imageUrl: "http://via.placeholder.com/80x80",
            },
            {
                _id: 5,
                title: "Christmas",
                description:
                    "Celebrate the holidays with out special Christmas themed playmat.",
                price: 45.0,
                belongsTo: [0, 1, 5],
                imageUrl: "http://via.placeholder.com/80x80",
            },
            {
                _id: 6,
                title: "IP Crossover",
                description: "Special Edition IP Crossover playmat.",
                price: 50.0,
                belongsTo: [0, 6],
                imageUrl: "http://via.placeholder.com/80x80",
            },
        ],
    };
}
