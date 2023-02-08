const mongoose = require('mongoose');

const carSch = mongoose.model('Cars', new mongoose.Schema(
    {
        models: [{
            car: {
                type: String,
                required: false
            },
            price: {
                type: String,
                default: "39,50,000",
                required: false
            },
            code: {
                type: String,
                required: false
            }
        }],
        exteriorcolors: [{
            name: {
                type: String,
                required: false
            },
            color: {
                type: String,
                required: false
            },
            mainImage: {
                type: String,
                required: false
            },
            wheels: {
                type: [String],
                required: false
            },
            price: {
                type: String,
                default: "0"
            },
            code: {
                type: String,
                required: false
            }

        }],
        interiorcolors: {
            type: [String],
            ref: "intColor",
            required: false
        },
        carbonedition: [{
            title: {
                type: String,
                required: false
            },
            type: {
                type: String,
                required: false
            },
            color: {
                type: String,
                required: false
            },
            mainImage: {
                type: String,
                required: false
            },
            wheels: {
                type: [String],
                required: false
            },
            price: {
                type: String,
                required: false,
                default: "6300000"
            },
            code: {
                type: String,
                required: false
            }
        }],
        wheels: {
            type: [String],
            ref: "Wheels",
            required: false
        },
        addons: {
            basic: [
                {
                    title: {
                        type: String,
                        required: false
                    },
                    price: {
                        type: String,
                        required: false
                    },
                    description: {
                        type: String,
                        required: false
                    },
                    code: {
                        type: String,
                        required: false
                    }

                }
            ],
            advance: [
                {
                    title: {
                        type: String,
                        required: false
                    },
                    subTitle: {
                        type: String,
                        required: false
                    },
                    description: {
                        type: String,
                        required: false
                    },
                    options: [
                        {
                            title: {
                                type: String,
                                required: false
                            },
                            price: {
                                type: String,
                                required: false
                            },
                            description: {
                                type: String,
                                required: false
                            },
                            code: {
                                type: String,
                                required: false
                            }
                        },
                    ],
                },
            ]
        }
    }));

exports.carSch = carSch;