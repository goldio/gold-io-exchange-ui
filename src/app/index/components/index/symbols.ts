export default [
    {
        "symbol": "ETHBTC",
        "status": "TRADING",
        "baseAsset": "ETH",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "100000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LTCBTC",
        "status": "TRADING",
        "baseAsset": "LTC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "100000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BNBBTC",
        "status": "TRADING",
        "baseAsset": "BNB",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NEOBTC",
        "status": "TRADING",
        "baseAsset": "NEO",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "100000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "QTUMETH",
        "status": "TRADING",
        "baseAsset": "QTUM",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "EOSETH",
        "status": "TRADING",
        "baseAsset": "EOS",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SNTETH",
        "status": "TRADING",
        "baseAsset": "SNT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BNTETH",
        "status": "TRADING",
        "baseAsset": "BNT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BCCBTC",
        "status": "BREAK",
        "baseAsset": "BCC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "100000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "GASBTC",
        "status": "TRADING",
        "baseAsset": "GAS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "100000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BNBETH",
        "status": "TRADING",
        "baseAsset": "BNB",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BTCUSDT",
        "status": "TRADING",
        "baseAsset": "BTC",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.01000000",
                "maxPrice": "10000000.00000000",
                "tickSize": "0.01000000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00000100",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00000100"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ETHUSDT",
        "status": "TRADING",
        "baseAsset": "ETH",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.01000000",
                "maxPrice": "10000000.00000000",
                "tickSize": "0.01000000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00001000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00001000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "HSRBTC",
        "status": "BREAK",
        "baseAsset": "HSR",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "OAXETH",
        "status": "TRADING",
        "baseAsset": "OAX",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "DNTETH",
        "status": "TRADING",
        "baseAsset": "DNT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "MCOETH",
        "status": "TRADING",
        "baseAsset": "MCO",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ICNETH",
        "status": "BREAK",
        "baseAsset": "ICN",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "MCOBTC",
        "status": "TRADING",
        "baseAsset": "MCO",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WTCBTC",
        "status": "TRADING",
        "baseAsset": "WTC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WTCETH",
        "status": "TRADING",
        "baseAsset": "WTC",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LRCBTC",
        "status": "TRADING",
        "baseAsset": "LRC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LRCETH",
        "status": "TRADING",
        "baseAsset": "LRC",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "QTUMBTC",
        "status": "TRADING",
        "baseAsset": "QTUM",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "YOYOBTC",
        "status": "TRADING",
        "baseAsset": "YOYO",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "OMGBTC",
        "status": "TRADING",
        "baseAsset": "OMG",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "OMGETH",
        "status": "TRADING",
        "baseAsset": "OMG",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ZRXBTC",
        "status": "TRADING",
        "baseAsset": "ZRX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ZRXETH",
        "status": "TRADING",
        "baseAsset": "ZRX",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "STRATBTC",
        "status": "TRADING",
        "baseAsset": "STRAT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "STRATETH",
        "status": "TRADING",
        "baseAsset": "STRAT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SNGLSBTC",
        "status": "TRADING",
        "baseAsset": "SNGLS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SNGLSETH",
        "status": "TRADING",
        "baseAsset": "SNGLS",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BQXBTC",
        "status": "TRADING",
        "baseAsset": "BQX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BQXETH",
        "status": "TRADING",
        "baseAsset": "BQX",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "KNCBTC",
        "status": "TRADING",
        "baseAsset": "KNC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "KNCETH",
        "status": "TRADING",
        "baseAsset": "KNC",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "FUNBTC",
        "status": "TRADING",
        "baseAsset": "FUN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "FUNETH",
        "status": "TRADING",
        "baseAsset": "FUN",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SNMBTC",
        "status": "TRADING",
        "baseAsset": "SNM",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SNMETH",
        "status": "TRADING",
        "baseAsset": "SNM",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NEOETH",
        "status": "TRADING",
        "baseAsset": "NEO",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "IOTABTC",
        "status": "TRADING",
        "baseAsset": "IOTA",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "IOTAETH",
        "status": "TRADING",
        "baseAsset": "IOTA",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LINKBTC",
        "status": "TRADING",
        "baseAsset": "LINK",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LINKETH",
        "status": "TRADING",
        "baseAsset": "LINK",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XVGBTC",
        "status": "TRADING",
        "baseAsset": "XVG",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XVGETH",
        "status": "TRADING",
        "baseAsset": "XVG",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SALTBTC",
        "status": "TRADING",
        "baseAsset": "SALT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SALTETH",
        "status": "TRADING",
        "baseAsset": "SALT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "MDABTC",
        "status": "TRADING",
        "baseAsset": "MDA",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "MDAETH",
        "status": "TRADING",
        "baseAsset": "MDA",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "MTLBTC",
        "status": "TRADING",
        "baseAsset": "MTL",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "MTLETH",
        "status": "TRADING",
        "baseAsset": "MTL",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SUBBTC",
        "status": "TRADING",
        "baseAsset": "SUB",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SUBETH",
        "status": "TRADING",
        "baseAsset": "SUB",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "EOSBTC",
        "status": "TRADING",
        "baseAsset": "EOS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SNTBTC",
        "status": "TRADING",
        "baseAsset": "SNT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ETCETH",
        "status": "TRADING",
        "baseAsset": "ETC",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ETCBTC",
        "status": "TRADING",
        "baseAsset": "ETC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "MTHBTC",
        "status": "TRADING",
        "baseAsset": "MTH",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "MTHETH",
        "status": "TRADING",
        "baseAsset": "MTH",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ENGBTC",
        "status": "TRADING",
        "baseAsset": "ENG",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ENGETH",
        "status": "TRADING",
        "baseAsset": "ENG",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "DNTBTC",
        "status": "TRADING",
        "baseAsset": "DNT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ZECBTC",
        "status": "TRADING",
        "baseAsset": "ZEC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ZECETH",
        "status": "TRADING",
        "baseAsset": "ZEC",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BNTBTC",
        "status": "TRADING",
        "baseAsset": "BNT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ASTBTC",
        "status": "TRADING",
        "baseAsset": "AST",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ASTETH",
        "status": "TRADING",
        "baseAsset": "AST",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "DASHBTC",
        "status": "TRADING",
        "baseAsset": "DASH",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "DASHETH",
        "status": "TRADING",
        "baseAsset": "DASH",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "OAXBTC",
        "status": "TRADING",
        "baseAsset": "OAX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ICNBTC",
        "status": "BREAK",
        "baseAsset": "ICN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BTGBTC",
        "status": "TRADING",
        "baseAsset": "BTG",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BTGETH",
        "status": "TRADING",
        "baseAsset": "BTG",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "EVXBTC",
        "status": "TRADING",
        "baseAsset": "EVX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "EVXETH",
        "status": "TRADING",
        "baseAsset": "EVX",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "REQBTC",
        "status": "TRADING",
        "baseAsset": "REQ",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "REQETH",
        "status": "TRADING",
        "baseAsset": "REQ",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "VIBBTC",
        "status": "TRADING",
        "baseAsset": "VIB",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "VIBETH",
        "status": "TRADING",
        "baseAsset": "VIB",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "HSRETH",
        "status": "BREAK",
        "baseAsset": "HSR",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "TRXBTC",
        "status": "TRADING",
        "baseAsset": "TRX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "TRXETH",
        "status": "TRADING",
        "baseAsset": "TRX",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "POWRBTC",
        "status": "TRADING",
        "baseAsset": "POWR",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "POWRETH",
        "status": "TRADING",
        "baseAsset": "POWR",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ARKBTC",
        "status": "TRADING",
        "baseAsset": "ARK",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ARKETH",
        "status": "TRADING",
        "baseAsset": "ARK",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "YOYOETH",
        "status": "TRADING",
        "baseAsset": "YOYO",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XRPBTC",
        "status": "TRADING",
        "baseAsset": "XRP",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XRPETH",
        "status": "TRADING",
        "baseAsset": "XRP",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "MODBTC",
        "status": "TRADING",
        "baseAsset": "MOD",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "MODETH",
        "status": "TRADING",
        "baseAsset": "MOD",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ENJBTC",
        "status": "TRADING",
        "baseAsset": "ENJ",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ENJETH",
        "status": "TRADING",
        "baseAsset": "ENJ",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "STORJBTC",
        "status": "TRADING",
        "baseAsset": "STORJ",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "STORJETH",
        "status": "TRADING",
        "baseAsset": "STORJ",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BNBUSDT",
        "status": "TRADING",
        "baseAsset": "BNB",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "VENBNB",
        "status": "BREAK",
        "baseAsset": "VEN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "YOYOBNB",
        "status": "TRADING",
        "baseAsset": "YOYO",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "POWRBNB",
        "status": "TRADING",
        "baseAsset": "POWR",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "VENBTC",
        "status": "BREAK",
        "baseAsset": "VEN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "VENETH",
        "status": "BREAK",
        "baseAsset": "VEN",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "KMDBTC",
        "status": "TRADING",
        "baseAsset": "KMD",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "KMDETH",
        "status": "TRADING",
        "baseAsset": "KMD",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NULSBNB",
        "status": "TRADING",
        "baseAsset": "NULS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "RCNBTC",
        "status": "TRADING",
        "baseAsset": "RCN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "RCNETH",
        "status": "TRADING",
        "baseAsset": "RCN",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "RCNBNB",
        "status": "TRADING",
        "baseAsset": "RCN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NULSBTC",
        "status": "TRADING",
        "baseAsset": "NULS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NULSETH",
        "status": "TRADING",
        "baseAsset": "NULS",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "RDNBTC",
        "status": "TRADING",
        "baseAsset": "RDN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "RDNETH",
        "status": "TRADING",
        "baseAsset": "RDN",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "RDNBNB",
        "status": "TRADING",
        "baseAsset": "RDN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XMRBTC",
        "status": "TRADING",
        "baseAsset": "XMR",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XMRETH",
        "status": "TRADING",
        "baseAsset": "XMR",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "DLTBNB",
        "status": "TRADING",
        "baseAsset": "DLT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WTCBNB",
        "status": "TRADING",
        "baseAsset": "WTC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "DLTBTC",
        "status": "TRADING",
        "baseAsset": "DLT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "DLTETH",
        "status": "TRADING",
        "baseAsset": "DLT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "AMBBTC",
        "status": "TRADING",
        "baseAsset": "AMB",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "AMBETH",
        "status": "TRADING",
        "baseAsset": "AMB",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "AMBBNB",
        "status": "TRADING",
        "baseAsset": "AMB",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BCCETH",
        "status": "BREAK",
        "baseAsset": "BCC",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BCCUSDT",
        "status": "BREAK",
        "baseAsset": "BCC",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.01000000",
                "maxPrice": "10000000.00000000",
                "tickSize": "0.01000000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00001000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00001000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BCCBNB",
        "status": "BREAK",
        "baseAsset": "BCC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.01000000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00001000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00001000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BATBTC",
        "status": "TRADING",
        "baseAsset": "BAT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BATETH",
        "status": "TRADING",
        "baseAsset": "BAT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BATBNB",
        "status": "TRADING",
        "baseAsset": "BAT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BCPTBTC",
        "status": "TRADING",
        "baseAsset": "BCPT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BCPTETH",
        "status": "TRADING",
        "baseAsset": "BCPT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BCPTBNB",
        "status": "TRADING",
        "baseAsset": "BCPT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ARNBTC",
        "status": "TRADING",
        "baseAsset": "ARN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ARNETH",
        "status": "TRADING",
        "baseAsset": "ARN",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "GVTBTC",
        "status": "TRADING",
        "baseAsset": "GVT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "GVTETH",
        "status": "TRADING",
        "baseAsset": "GVT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "CDTBTC",
        "status": "TRADING",
        "baseAsset": "CDT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "CDTETH",
        "status": "TRADING",
        "baseAsset": "CDT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "GXSBTC",
        "status": "TRADING",
        "baseAsset": "GXS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "GXSETH",
        "status": "TRADING",
        "baseAsset": "GXS",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NEOUSDT",
        "status": "TRADING",
        "baseAsset": "NEO",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00100000",
                "maxPrice": "10000000.00000000",
                "tickSize": "0.00100000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NEOBNB",
        "status": "TRADING",
        "baseAsset": "NEO",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00100000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "POEBTC",
        "status": "TRADING",
        "baseAsset": "POE",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "POEETH",
        "status": "TRADING",
        "baseAsset": "POE",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "QSPBTC",
        "status": "TRADING",
        "baseAsset": "QSP",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "QSPETH",
        "status": "TRADING",
        "baseAsset": "QSP",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "QSPBNB",
        "status": "TRADING",
        "baseAsset": "QSP",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BTSBTC",
        "status": "TRADING",
        "baseAsset": "BTS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BTSETH",
        "status": "TRADING",
        "baseAsset": "BTS",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BTSBNB",
        "status": "TRADING",
        "baseAsset": "BTS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XZCBTC",
        "status": "TRADING",
        "baseAsset": "XZC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XZCETH",
        "status": "TRADING",
        "baseAsset": "XZC",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XZCBNB",
        "status": "TRADING",
        "baseAsset": "XZC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00100000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LSKBTC",
        "status": "TRADING",
        "baseAsset": "LSK",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LSKETH",
        "status": "TRADING",
        "baseAsset": "LSK",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LSKBNB",
        "status": "TRADING",
        "baseAsset": "LSK",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "TNTBTC",
        "status": "TRADING",
        "baseAsset": "TNT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "TNTETH",
        "status": "TRADING",
        "baseAsset": "TNT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "FUELBTC",
        "status": "TRADING",
        "baseAsset": "FUEL",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "FUELETH",
        "status": "TRADING",
        "baseAsset": "FUEL",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "MANABTC",
        "status": "TRADING",
        "baseAsset": "MANA",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "MANAETH",
        "status": "TRADING",
        "baseAsset": "MANA",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BCDBTC",
        "status": "TRADING",
        "baseAsset": "BCD",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BCDETH",
        "status": "TRADING",
        "baseAsset": "BCD",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "DGDBTC",
        "status": "TRADING",
        "baseAsset": "DGD",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "DGDETH",
        "status": "TRADING",
        "baseAsset": "DGD",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "IOTABNB",
        "status": "TRADING",
        "baseAsset": "IOTA",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ADXBTC",
        "status": "TRADING",
        "baseAsset": "ADX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ADXETH",
        "status": "TRADING",
        "baseAsset": "ADX",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ADXBNB",
        "status": "TRADING",
        "baseAsset": "ADX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ADABTC",
        "status": "TRADING",
        "baseAsset": "ADA",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ADAETH",
        "status": "TRADING",
        "baseAsset": "ADA",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "PPTBTC",
        "status": "TRADING",
        "baseAsset": "PPT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "PPTETH",
        "status": "TRADING",
        "baseAsset": "PPT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "CMTBTC",
        "status": "TRADING",
        "baseAsset": "CMT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "CMTETH",
        "status": "TRADING",
        "baseAsset": "CMT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "CMTBNB",
        "status": "TRADING",
        "baseAsset": "CMT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XLMBTC",
        "status": "TRADING",
        "baseAsset": "XLM",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XLMETH",
        "status": "TRADING",
        "baseAsset": "XLM",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XLMBNB",
        "status": "TRADING",
        "baseAsset": "XLM",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "CNDBTC",
        "status": "TRADING",
        "baseAsset": "CND",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "CNDETH",
        "status": "TRADING",
        "baseAsset": "CND",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "CNDBNB",
        "status": "TRADING",
        "baseAsset": "CND",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LENDBTC",
        "status": "TRADING",
        "baseAsset": "LEND",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LENDETH",
        "status": "TRADING",
        "baseAsset": "LEND",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WABIBTC",
        "status": "TRADING",
        "baseAsset": "WABI",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WABIETH",
        "status": "TRADING",
        "baseAsset": "WABI",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WABIBNB",
        "status": "TRADING",
        "baseAsset": "WABI",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LTCETH",
        "status": "TRADING",
        "baseAsset": "LTC",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LTCUSDT",
        "status": "TRADING",
        "baseAsset": "LTC",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.01000000",
                "maxPrice": "10000000.00000000",
                "tickSize": "0.01000000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00001000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00001000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LTCBNB",
        "status": "TRADING",
        "baseAsset": "LTC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.01000000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00001000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00001000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "TNBBTC",
        "status": "TRADING",
        "baseAsset": "TNB",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "TNBETH",
        "status": "TRADING",
        "baseAsset": "TNB",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WAVESBTC",
        "status": "TRADING",
        "baseAsset": "WAVES",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WAVESETH",
        "status": "TRADING",
        "baseAsset": "WAVES",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WAVESBNB",
        "status": "TRADING",
        "baseAsset": "WAVES",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "GTOBTC",
        "status": "TRADING",
        "baseAsset": "GTO",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "GTOETH",
        "status": "TRADING",
        "baseAsset": "GTO",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "GTOBNB",
        "status": "TRADING",
        "baseAsset": "GTO",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ICXBTC",
        "status": "TRADING",
        "baseAsset": "ICX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ICXETH",
        "status": "TRADING",
        "baseAsset": "ICX",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ICXBNB",
        "status": "TRADING",
        "baseAsset": "ICX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "OSTBTC",
        "status": "TRADING",
        "baseAsset": "OST",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "OSTETH",
        "status": "TRADING",
        "baseAsset": "OST",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "OSTBNB",
        "status": "TRADING",
        "baseAsset": "OST",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ELFBTC",
        "status": "TRADING",
        "baseAsset": "ELF",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ELFETH",
        "status": "TRADING",
        "baseAsset": "ELF",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "AIONBTC",
        "status": "TRADING",
        "baseAsset": "AION",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "AIONETH",
        "status": "TRADING",
        "baseAsset": "AION",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "AIONBNB",
        "status": "TRADING",
        "baseAsset": "AION",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NEBLBTC",
        "status": "TRADING",
        "baseAsset": "NEBL",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NEBLETH",
        "status": "TRADING",
        "baseAsset": "NEBL",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NEBLBNB",
        "status": "TRADING",
        "baseAsset": "NEBL",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BRDBTC",
        "status": "TRADING",
        "baseAsset": "BRD",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BRDETH",
        "status": "TRADING",
        "baseAsset": "BRD",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BRDBNB",
        "status": "TRADING",
        "baseAsset": "BRD",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "MCOBNB",
        "status": "TRADING",
        "baseAsset": "MCO",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "EDOBTC",
        "status": "TRADING",
        "baseAsset": "EDO",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "EDOETH",
        "status": "TRADING",
        "baseAsset": "EDO",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WINGSBTC",
        "status": "TRADING",
        "baseAsset": "WINGS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WINGSETH",
        "status": "TRADING",
        "baseAsset": "WINGS",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NAVBTC",
        "status": "TRADING",
        "baseAsset": "NAV",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NAVETH",
        "status": "TRADING",
        "baseAsset": "NAV",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NAVBNB",
        "status": "TRADING",
        "baseAsset": "NAV",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LUNBTC",
        "status": "TRADING",
        "baseAsset": "LUN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LUNETH",
        "status": "TRADING",
        "baseAsset": "LUN",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "TRIGBTC",
        "status": "BREAK",
        "baseAsset": "TRIG",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "TRIGETH",
        "status": "BREAK",
        "baseAsset": "TRIG",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "TRIGBNB",
        "status": "BREAK",
        "baseAsset": "TRIG",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "APPCBTC",
        "status": "TRADING",
        "baseAsset": "APPC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "APPCETH",
        "status": "TRADING",
        "baseAsset": "APPC",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "APPCBNB",
        "status": "TRADING",
        "baseAsset": "APPC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "VIBEBTC",
        "status": "TRADING",
        "baseAsset": "VIBE",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "VIBEETH",
        "status": "TRADING",
        "baseAsset": "VIBE",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "RLCBTC",
        "status": "TRADING",
        "baseAsset": "RLC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "RLCETH",
        "status": "TRADING",
        "baseAsset": "RLC",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "RLCBNB",
        "status": "TRADING",
        "baseAsset": "RLC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "INSBTC",
        "status": "TRADING",
        "baseAsset": "INS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "INSETH",
        "status": "TRADING",
        "baseAsset": "INS",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "PIVXBTC",
        "status": "TRADING",
        "baseAsset": "PIVX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "PIVXETH",
        "status": "TRADING",
        "baseAsset": "PIVX",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "PIVXBNB",
        "status": "TRADING",
        "baseAsset": "PIVX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "IOSTBTC",
        "status": "TRADING",
        "baseAsset": "IOST",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "IOSTETH",
        "status": "TRADING",
        "baseAsset": "IOST",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "CHATBTC",
        "status": "BREAK",
        "baseAsset": "CHAT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "CHATETH",
        "status": "BREAK",
        "baseAsset": "CHAT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "STEEMBTC",
        "status": "TRADING",
        "baseAsset": "STEEM",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "STEEMETH",
        "status": "TRADING",
        "baseAsset": "STEEM",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "STEEMBNB",
        "status": "TRADING",
        "baseAsset": "STEEM",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NANOBTC",
        "status": "TRADING",
        "baseAsset": "NANO",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NANOETH",
        "status": "TRADING",
        "baseAsset": "NANO",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NANOBNB",
        "status": "TRADING",
        "baseAsset": "NANO",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "VIABTC",
        "status": "TRADING",
        "baseAsset": "VIA",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "VIAETH",
        "status": "TRADING",
        "baseAsset": "VIA",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "VIABNB",
        "status": "TRADING",
        "baseAsset": "VIA",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BLZBTC",
        "status": "TRADING",
        "baseAsset": "BLZ",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BLZETH",
        "status": "TRADING",
        "baseAsset": "BLZ",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BLZBNB",
        "status": "TRADING",
        "baseAsset": "BLZ",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "AEBTC",
        "status": "TRADING",
        "baseAsset": "AE",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "AEETH",
        "status": "TRADING",
        "baseAsset": "AE",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "AEBNB",
        "status": "TRADING",
        "baseAsset": "AE",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "RPXBTC",
        "status": "BREAK",
        "baseAsset": "RPX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "RPXETH",
        "status": "BREAK",
        "baseAsset": "RPX",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "RPXBNB",
        "status": "BREAK",
        "baseAsset": "RPX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NCASHBTC",
        "status": "TRADING",
        "baseAsset": "NCASH",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NCASHETH",
        "status": "TRADING",
        "baseAsset": "NCASH",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NCASHBNB",
        "status": "TRADING",
        "baseAsset": "NCASH",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "POABTC",
        "status": "TRADING",
        "baseAsset": "POA",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "POAETH",
        "status": "TRADING",
        "baseAsset": "POA",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "POABNB",
        "status": "TRADING",
        "baseAsset": "POA",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ZILBTC",
        "status": "TRADING",
        "baseAsset": "ZIL",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ZILETH",
        "status": "TRADING",
        "baseAsset": "ZIL",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ZILBNB",
        "status": "TRADING",
        "baseAsset": "ZIL",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ONTBTC",
        "status": "TRADING",
        "baseAsset": "ONT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ONTETH",
        "status": "TRADING",
        "baseAsset": "ONT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ONTBNB",
        "status": "TRADING",
        "baseAsset": "ONT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "STORMBTC",
        "status": "TRADING",
        "baseAsset": "STORM",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "STORMETH",
        "status": "TRADING",
        "baseAsset": "STORM",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "STORMBNB",
        "status": "TRADING",
        "baseAsset": "STORM",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "QTUMBNB",
        "status": "TRADING",
        "baseAsset": "QTUM",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "QTUMUSDT",
        "status": "TRADING",
        "baseAsset": "QTUM",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00100000",
                "maxPrice": "10000000.00000000",
                "tickSize": "0.00100000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XEMBTC",
        "status": "TRADING",
        "baseAsset": "XEM",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XEMETH",
        "status": "TRADING",
        "baseAsset": "XEM",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XEMBNB",
        "status": "TRADING",
        "baseAsset": "XEM",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WANBTC",
        "status": "TRADING",
        "baseAsset": "WAN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WANETH",
        "status": "TRADING",
        "baseAsset": "WAN",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WANBNB",
        "status": "TRADING",
        "baseAsset": "WAN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WPRBTC",
        "status": "TRADING",
        "baseAsset": "WPR",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WPRETH",
        "status": "TRADING",
        "baseAsset": "WPR",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "QLCBTC",
        "status": "TRADING",
        "baseAsset": "QLC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "QLCETH",
        "status": "TRADING",
        "baseAsset": "QLC",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SYSBTC",
        "status": "TRADING",
        "baseAsset": "SYS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SYSETH",
        "status": "TRADING",
        "baseAsset": "SYS",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SYSBNB",
        "status": "TRADING",
        "baseAsset": "SYS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "QLCBNB",
        "status": "TRADING",
        "baseAsset": "QLC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "GRSBTC",
        "status": "TRADING",
        "baseAsset": "GRS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "GRSETH",
        "status": "TRADING",
        "baseAsset": "GRS",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ADAUSDT",
        "status": "TRADING",
        "baseAsset": "ADA",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ADABNB",
        "status": "TRADING",
        "baseAsset": "ADA",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "CLOAKBTC",
        "status": "TRADING",
        "baseAsset": "CLOAK",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "CLOAKETH",
        "status": "TRADING",
        "baseAsset": "CLOAK",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "GNTBTC",
        "status": "TRADING",
        "baseAsset": "GNT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "GNTETH",
        "status": "TRADING",
        "baseAsset": "GNT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "GNTBNB",
        "status": "TRADING",
        "baseAsset": "GNT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LOOMBTC",
        "status": "TRADING",
        "baseAsset": "LOOM",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LOOMETH",
        "status": "TRADING",
        "baseAsset": "LOOM",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LOOMBNB",
        "status": "TRADING",
        "baseAsset": "LOOM",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XRPUSDT",
        "status": "TRADING",
        "baseAsset": "XRP",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BCNBTC",
        "status": "BREAK",
        "baseAsset": "BCN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BCNETH",
        "status": "BREAK",
        "baseAsset": "BCN",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BCNBNB",
        "status": "BREAK",
        "baseAsset": "BCN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "REPBTC",
        "status": "TRADING",
        "baseAsset": "REP",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "REPETH",
        "status": "TRADING",
        "baseAsset": "REP",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "REPBNB",
        "status": "TRADING",
        "baseAsset": "REP",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00100000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "TUSDBTC",
        "status": "TRADING",
        "baseAsset": "TUSD",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "TUSDETH",
        "status": "TRADING",
        "baseAsset": "TUSD",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "TUSDBNB",
        "status": "TRADING",
        "baseAsset": "TUSD",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ZENBTC",
        "status": "TRADING",
        "baseAsset": "ZEN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ZENETH",
        "status": "TRADING",
        "baseAsset": "ZEN",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ZENBNB",
        "status": "TRADING",
        "baseAsset": "ZEN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00100000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SKYBTC",
        "status": "TRADING",
        "baseAsset": "SKY",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SKYETH",
        "status": "TRADING",
        "baseAsset": "SKY",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SKYBNB",
        "status": "TRADING",
        "baseAsset": "SKY",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00100000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "EOSUSDT",
        "status": "TRADING",
        "baseAsset": "EOS",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "EOSBNB",
        "status": "TRADING",
        "baseAsset": "EOS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "CVCBTC",
        "status": "TRADING",
        "baseAsset": "CVC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "CVCETH",
        "status": "TRADING",
        "baseAsset": "CVC",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "CVCBNB",
        "status": "TRADING",
        "baseAsset": "CVC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "THETABTC",
        "status": "TRADING",
        "baseAsset": "THETA",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "THETAETH",
        "status": "TRADING",
        "baseAsset": "THETA",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "THETABNB",
        "status": "TRADING",
        "baseAsset": "THETA",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XRPBNB",
        "status": "TRADING",
        "baseAsset": "XRP",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "TUSDUSDT",
        "status": "TRADING",
        "baseAsset": "TUSD",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "IOTAUSDT",
        "status": "TRADING",
        "baseAsset": "IOTA",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XLMUSDT",
        "status": "TRADING",
        "baseAsset": "XLM",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "IOTXBTC",
        "status": "TRADING",
        "baseAsset": "IOTX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "IOTXETH",
        "status": "TRADING",
        "baseAsset": "IOTX",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "QKCBTC",
        "status": "TRADING",
        "baseAsset": "QKC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "QKCETH",
        "status": "TRADING",
        "baseAsset": "QKC",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "AGIBTC",
        "status": "TRADING",
        "baseAsset": "AGI",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "AGIETH",
        "status": "TRADING",
        "baseAsset": "AGI",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "AGIBNB",
        "status": "TRADING",
        "baseAsset": "AGI",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NXSBTC",
        "status": "TRADING",
        "baseAsset": "NXS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NXSETH",
        "status": "TRADING",
        "baseAsset": "NXS",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NXSBNB",
        "status": "TRADING",
        "baseAsset": "NXS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ENJBNB",
        "status": "TRADING",
        "baseAsset": "ENJ",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "DATABTC",
        "status": "TRADING",
        "baseAsset": "DATA",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "DATAETH",
        "status": "TRADING",
        "baseAsset": "DATA",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ONTUSDT",
        "status": "TRADING",
        "baseAsset": "ONT",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "TRXBNB",
        "status": "TRADING",
        "baseAsset": "TRX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "TRXUSDT",
        "status": "TRADING",
        "baseAsset": "TRX",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ETCUSDT",
        "status": "TRADING",
        "baseAsset": "ETC",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ETCBNB",
        "status": "TRADING",
        "baseAsset": "ETC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ICXUSDT",
        "status": "TRADING",
        "baseAsset": "ICX",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SCBTC",
        "status": "TRADING",
        "baseAsset": "SC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SCETH",
        "status": "TRADING",
        "baseAsset": "SC",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "SCBNB",
        "status": "TRADING",
        "baseAsset": "SC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NPXSBTC",
        "status": "TRADING",
        "baseAsset": "NPXS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NPXSETH",
        "status": "TRADING",
        "baseAsset": "NPXS",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "VENUSDT",
        "status": "BREAK",
        "baseAsset": "VEN",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "KEYBTC",
        "status": "TRADING",
        "baseAsset": "KEY",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "KEYETH",
        "status": "TRADING",
        "baseAsset": "KEY",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NASBTC",
        "status": "TRADING",
        "baseAsset": "NAS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NASETH",
        "status": "TRADING",
        "baseAsset": "NAS",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NASBNB",
        "status": "TRADING",
        "baseAsset": "NAS",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "MFTBTC",
        "status": "TRADING",
        "baseAsset": "MFT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "MFTETH",
        "status": "TRADING",
        "baseAsset": "MFT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "MFTBNB",
        "status": "TRADING",
        "baseAsset": "MFT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "DENTBTC",
        "status": "TRADING",
        "baseAsset": "DENT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "DENTETH",
        "status": "TRADING",
        "baseAsset": "DENT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ARDRBTC",
        "status": "TRADING",
        "baseAsset": "ARDR",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ARDRETH",
        "status": "TRADING",
        "baseAsset": "ARDR",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ARDRBNB",
        "status": "TRADING",
        "baseAsset": "ARDR",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NULSUSDT",
        "status": "TRADING",
        "baseAsset": "NULS",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "HOTBTC",
        "status": "TRADING",
        "baseAsset": "HOT",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "HOTETH",
        "status": "TRADING",
        "baseAsset": "HOT",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "VETBTC",
        "status": "TRADING",
        "baseAsset": "VET",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "VETETH",
        "status": "TRADING",
        "baseAsset": "VET",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "VETUSDT",
        "status": "TRADING",
        "baseAsset": "VET",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000100",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "VETBNB",
        "status": "TRADING",
        "baseAsset": "VET",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "DOCKBTC",
        "status": "TRADING",
        "baseAsset": "DOCK",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "DOCKETH",
        "status": "TRADING",
        "baseAsset": "DOCK",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "POLYBTC",
        "status": "TRADING",
        "baseAsset": "POLY",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "POLYBNB",
        "status": "TRADING",
        "baseAsset": "POLY",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "PHXBTC",
        "status": "TRADING",
        "baseAsset": "PHX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "PHXETH",
        "status": "TRADING",
        "baseAsset": "PHX",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "PHXBNB",
        "status": "TRADING",
        "baseAsset": "PHX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "HCBTC",
        "status": "TRADING",
        "baseAsset": "HC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000010"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "HCETH",
        "status": "TRADING",
        "baseAsset": "HC",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "GOBTC",
        "status": "TRADING",
        "baseAsset": "GO",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "GOBNB",
        "status": "TRADING",
        "baseAsset": "GO",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "PAXBTC",
        "status": "BREAK",
        "baseAsset": "PAX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "PAXBNB",
        "status": "BREAK",
        "baseAsset": "PAX",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "PAXUSDT",
        "status": "TRADING",
        "baseAsset": "PAX",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "PAXETH",
        "status": "BREAK",
        "baseAsset": "PAX",
        "baseAssetPrecision": 8,
        "quoteAsset": "ETH",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.01000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "RVNBTC",
        "status": "TRADING",
        "baseAsset": "RVN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "RVNBNB",
        "status": "TRADING",
        "baseAsset": "RVN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "DCRBTC",
        "status": "TRADING",
        "baseAsset": "DCR",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "DCRBNB",
        "status": "TRADING",
        "baseAsset": "DCR",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00100000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "USDCBNB",
        "status": "BREAK",
        "baseAsset": "USDC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "USDCBTC",
        "status": "BREAK",
        "baseAsset": "USDC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "MITHBTC",
        "status": "TRADING",
        "baseAsset": "MITH",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "MITHBNB",
        "status": "TRADING",
        "baseAsset": "MITH",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BCHABCBTC",
        "status": "TRADING",
        "baseAsset": "BCHABC",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BCHSVBTC",
        "status": "TRADING",
        "baseAsset": "BCHSV",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000000",
                "maxPrice": "0.00000000",
                "tickSize": "0.00000100"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BCHABCUSDT",
        "status": "TRADING",
        "baseAsset": "BCHABC",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.01000000",
                "maxPrice": "10000000.00000000",
                "tickSize": "0.01000000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00001000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00001000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BCHSVUSDT",
        "status": "TRADING",
        "baseAsset": "BCHSV",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.01000000",
                "maxPrice": "10000000.00000000",
                "tickSize": "0.01000000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00001000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00001000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BNBPAX",
        "status": "TRADING",
        "baseAsset": "BNB",
        "baseAssetPrecision": 8,
        "quoteAsset": "PAX",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BTCPAX",
        "status": "TRADING",
        "baseAsset": "BTC",
        "baseAssetPrecision": 8,
        "quoteAsset": "PAX",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.01000000",
                "maxPrice": "10000000.00000000",
                "tickSize": "0.01000000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00000100",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00000100"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ETHPAX",
        "status": "TRADING",
        "baseAsset": "ETH",
        "baseAssetPrecision": 8,
        "quoteAsset": "PAX",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.01000000",
                "maxPrice": "10000000.00000000",
                "tickSize": "0.01000000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00001000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00001000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XRPPAX",
        "status": "TRADING",
        "baseAsset": "XRP",
        "baseAssetPrecision": 8,
        "quoteAsset": "PAX",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "EOSPAX",
        "status": "TRADING",
        "baseAsset": "EOS",
        "baseAssetPrecision": 8,
        "quoteAsset": "PAX",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XLMPAX",
        "status": "TRADING",
        "baseAsset": "XLM",
        "baseAssetPrecision": 8,
        "quoteAsset": "PAX",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "RENBTC",
        "status": "TRADING",
        "baseAsset": "REN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BTC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00000001",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00000001"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "1.00000000",
                "maxQty": "90000000.00000000",
                "stepSize": "1.00000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "0.00100000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "RENBNB",
        "status": "TRADING",
        "baseAsset": "REN",
        "baseAssetPrecision": 8,
        "quoteAsset": "BNB",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XRPTUSD",
        "status": "TRADING",
        "baseAsset": "XRP",
        "baseAssetPrecision": 8,
        "quoteAsset": "TUSD",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "EOSTUSD",
        "status": "TRADING",
        "baseAsset": "EOS",
        "baseAssetPrecision": 8,
        "quoteAsset": "TUSD",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XLMTUSD",
        "status": "TRADING",
        "baseAsset": "XLM",
        "baseAssetPrecision": 8,
        "quoteAsset": "TUSD",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "10000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "1.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BNBUSDC",
        "status": "TRADING",
        "baseAsset": "BNB",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "BTCUSDC",
        "status": "TRADING",
        "baseAsset": "BTC",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.01000000",
                "maxPrice": "10000000.00000000",
                "tickSize": "0.01000000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00000100",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00000100"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ETHUSDC",
        "status": "TRADING",
        "baseAsset": "ETH",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.01000000",
                "maxPrice": "10000000.00000000",
                "tickSize": "0.01000000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00001000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00001000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XRPUSDC",
        "status": "TRADING",
        "baseAsset": "XRP",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "EOSUSDC",
        "status": "TRADING",
        "baseAsset": "EOS",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XLMUSDC",
        "status": "TRADING",
        "baseAsset": "XLM",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "USDCUSDT",
        "status": "TRADING",
        "baseAsset": "USDC",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "ADATUSD",
        "status": "TRADING",
        "baseAsset": "ADA",
        "baseAssetPrecision": 8,
        "quoteAsset": "TUSD",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "TRXTUSD",
        "status": "TRADING",
        "baseAsset": "TRX",
        "baseAssetPrecision": 8,
        "quoteAsset": "TUSD",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "NEOTUSD",
        "status": "TRADING",
        "baseAsset": "NEO",
        "baseAssetPrecision": 8,
        "quoteAsset": "TUSD",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00100000",
                "maxPrice": "10000000.00000000",
                "tickSize": "0.00100000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "TRXXRP",
        "status": "TRADING",
        "baseAsset": "TRX",
        "baseAssetPrecision": 8,
        "quoteAsset": "XRP",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00001000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00001000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.10000000",
                "maxQty": "90000000.00000000",
                "stepSize": "0.10000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "XZCXRP",
        "status": "TRADING",
        "baseAsset": "XZC",
        "baseAssetPrecision": 8,
        "quoteAsset": "XRP",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00100000",
                "maxPrice": "10000000.00000000",
                "tickSize": "0.00100000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.00100000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.00100000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "PAXTUSD",
        "status": "TRADING",
        "baseAsset": "PAX",
        "baseAssetPrecision": 8,
        "quoteAsset": "TUSD",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "USDCTUSD",
        "status": "TRADING",
        "baseAsset": "USDC",
        "baseAssetPrecision": 8,
        "quoteAsset": "TUSD",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "USDCPAX",
        "status": "TRADING",
        "baseAsset": "USDC",
        "baseAssetPrecision": 8,
        "quoteAsset": "PAX",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LINKUSDT",
        "status": "TRADING",
        "baseAsset": "LINK",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LINKTUSD",
        "status": "TRADING",
        "baseAsset": "LINK",
        "baseAssetPrecision": 8,
        "quoteAsset": "TUSD",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LINKPAX",
        "status": "TRADING",
        "baseAsset": "LINK",
        "baseAssetPrecision": 8,
        "quoteAsset": "PAX",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "LINKUSDC",
        "status": "TRADING",
        "baseAsset": "LINK",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WAVESUSDT",
        "status": "TRADING",
        "baseAsset": "WAVES",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDT",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WAVESTUSD",
        "status": "TRADING",
        "baseAsset": "WAVES",
        "baseAssetPrecision": 8,
        "quoteAsset": "TUSD",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WAVESPAX",
        "status": "TRADING",
        "baseAsset": "WAVES",
        "baseAssetPrecision": 8,
        "quoteAsset": "PAX",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    },
    {
        "symbol": "WAVESUSDC",
        "status": "TRADING",
        "baseAsset": "WAVES",
        "baseAssetPrecision": 8,
        "quoteAsset": "USDC",
        "quotePrecision": 8,
        "orderTypes": [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT_LIMIT"
        ],
        "icebergAllowed": true,
        "filters": [
            {
                "filterType": "PRICE_FILTER",
                "minPrice": "0.00010000",
                "maxPrice": "100000.00000000",
                "tickSize": "0.00010000"
            },
            {
                "filterType": "PERCENT_PRICE",
                "multiplierUp": "10",
                "multiplierDown": "0.1",
                "avgPriceMins": 5
            },
            {
                "filterType": "LOT_SIZE",
                "minQty": "0.01000000",
                "maxQty": "10000000.00000000",
                "stepSize": "0.01000000"
            },
            {
                "filterType": "MIN_NOTIONAL",
                "minNotional": "10.00000000",
                "applyToMarket": true,
                "avgPriceMins": 5
            },
            {
                "filterType": "ICEBERG_PARTS",
                "limit": 10
            },
            {
                "filterType": "MAX_NUM_ALGO_ORDERS",
                "maxNumAlgoOrders": 5
            }
        ]
    }
]