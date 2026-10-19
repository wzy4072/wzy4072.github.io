const SHIPPING_DATA = {
  version: "2026.10-simplified-en",
  currency: "RMB",
  formula:
    "Total freight = chargeable weight (kg) * unit price (RMB/kg) + fixed fee per shipment (RMB)",
  notes:
    "Sea freight / truck / rail only. Air freight, CBM-based pricing, and per-piece/overweight/oversize/pallet/per-kg surcharges removed. Max 2 schemes per city per mode; where transit times are similar, the lowest price is kept.",
  data: [
    {
      country: "United States",
      countryCn: "USA",
      cities: [
        {
          city: "Los Angeles / Norwalk, CA",
          zipcode: "90650",
          schemes: [
            {
              mode: "Sea",
              schemeName: "Matson Express DDP",
              transitTime: "15-20 days ",
              unitPricePerKg: 23.2,
              fixedFeePerShipment: 0,
            },
            {
              mode: "Sea",
              schemeName: "Yantian Special Sea Freight",
              transitTime: "approx. 35 days ",
              unitPricePerKg: 14.5,
              fixedFeePerShipment: 0,
            },
          ],
        },
        {
          city: "Green Bay, WI",
          zipcode: "54311",
          schemes: [
            {
              mode: "Sea",
              schemeName: "Matson Express DDP",
              transitTime: "15-20 days ",
              unitPricePerKg: 23.5,
              fixedFeePerShipment: 0,
            },
            {
              mode: "Sea",
              schemeName: "Economy Sea Freight",
              transitTime: "approx. 35 days ",
              unitPricePerKg: 14.5,
              fixedFeePerShipment: 0,
            },
          ],
        },
        {
          city: "Seattle, WA",
          zipcode: "98121",
          schemes: [
            {
              mode: "Sea",
              schemeName: "Matson Direct Express DDP",
              transitTime: "15-18 days ",
              unitPricePerKg: 23.0,
              fixedFeePerShipment: 0,
            },
            {
              mode: "Sea",
              schemeName: "Standard Sea Freight DDP",
              transitTime: "30-35 days ",
              unitPricePerKg: 14.0,
              fixedFeePerShipment: 0,
            },
          ],
        },
        {
          city: "Dallas / Houston, TX",
          zipcode: "75001 / 77001",
          schemes: [
            {
              mode: "Sea",
              schemeName: "Express Transshipment DDP",
              transitTime: "18-22 days ",
              unitPricePerKg: 24.0,
              fixedFeePerShipment: 0,
            },
            {
              mode: "Sea",
              schemeName: "All-Water Standard Sea Freight DDP",
              transitTime: "35-40 days ",
              unitPricePerKg: 15.0,
              fixedFeePerShipment: 0,
            },
          ],
        },
        {
          city: "New York, NY / Miami, FL (US East Coast)",
          zipcode: "10001 / 33166",
          schemes: [
            {
              mode: "Sea",
              schemeName: "Matson US East Consolidated Express",
              transitTime: "20-25 days ",
              unitPricePerKg: 24.5,
              fixedFeePerShipment: 0,
            },
            {
              mode: "Sea",
              schemeName: "US East All-Water Sea Freight",
              transitTime: "35-45 days ",
              unitPricePerKg: 15.5,
              fixedFeePerShipment: 0,
            },
          ],
        },
      ],
    },
    {
      country: "France",
      countryCn: "France",
      cities: [
        {
          city: "Avignon",
          zipcode: "84140",
          schemes: [
            {
              mode: "Truck",
              schemeName: "China-Europe Truck (DDP)",
              transitTime: "30-35 days ",
              unitPricePerKg: 28.0,
              fixedFeePerShipment: 100,
            },
            {
              mode: "Rail",
              schemeName: "China-Europe Railway Express DDP",
              transitTime: "30-35 days ",
              unitPricePerKg: 17.0,
              fixedFeePerShipment: 150,
            },
            {
              mode: "Sea",
              schemeName: "France Standard Sea Freight DDP",
              transitTime: "50-55 days ",
              unitPricePerKg: 14.5,
              fixedFeePerShipment: 150,
            },
          ],
        },
        {
          city: "Baillargues / Montpellier",
          zipcode: "34670",
          schemes: [
            {
              mode: "Sea",
              schemeName: "France Sea Freight DDP Option 1",
              transitTime: "50-55 days ",
              unitPricePerKg: 14.5,
              fixedFeePerShipment: 150,
            },
          ],
        },
        {
          city: "Paris / Île-de-France",
          zipcode: "75001 - 75020",
          schemes: [
            {
              mode: "Truck",
              schemeName: "Paris Truck DDP",
              transitTime: "28-32 days ",
              unitPricePerKg: 27.0,
              fixedFeePerShipment: 100,
            },
            {
              mode: "Rail",
              schemeName: "China-Europe Railway DDP",
              transitTime: "30-35 days ",
              unitPricePerKg: 17.0,
              fixedFeePerShipment: 150,
            },
            {
              mode: "Sea",
              schemeName: "France Standard Sea Freight DDP",
              transitTime: "45-50 days ",
              unitPricePerKg: 14.0,
              fixedFeePerShipment: 100,
            },
          ],
        },
      ],
    },
    {
      country: "United Kingdom",
      countryCn: "UK",
      cities: [
        {
          city: "Milton Keynes",
          zipcode: "MK10 9XL",
          schemes: [
            {
              mode: "Sea",
              schemeName: "UK Express Sea Freight DDP",
              transitTime: "25-30 days ",
              unitPricePerKg: 21.0,
              fixedFeePerShipment: 0,
            },
            {
              mode: "Sea",
              schemeName: "UK Standard Sea Freight DDP",
              transitTime: "45-50 days ",
              unitPricePerKg: 14.0,
              fixedFeePerShipment: 100,
            },
          ],
        },
        {
          city: "Dunstable / Bedfordshire",
          zipcode: "LU5 5SD",
          schemes: [
            {
              mode: "Sea",
              schemeName: "UK Standard Sea Freight DDP",
              transitTime: "45-50 days ",
              unitPricePerKg: 14.5,
              fixedFeePerShipment: 100,
            },
            {
              mode: "Rail",
              schemeName: "China-Europe Railway to UK",
              transitTime: "35-40 days ",
              unitPricePerKg: 18.0,
              fixedFeePerShipment: 150,
            },
          ],
        },
        {
          city: "London / Greater London",
          zipcode: "E1, EC1, SE1, etc.",
          schemes: [
            {
              mode: "Sea",
              schemeName: "London Express Sea Line DDP",
              transitTime: "25-28 days ",
              unitPricePerKg: 20.5,
              fixedFeePerShipment: 0,
            },
            {
              mode: "Sea",
              schemeName: "London Economy Sea Freight DDP",
              transitTime: "40-48 days ",
              unitPricePerKg: 13.5,
              fixedFeePerShipment: 100,
            },
          ],
        },
      ],
    },
    {
      country: "Germany",
      countryCn: "Germany",
      cities: [
        {
          city: "Berlin / Frankfurt / Munich and nationwide",
          zipcode: "Nationwide Germany",
          schemes: [
            {
              mode: "Truck",
              schemeName: "China-Europe Truck DDP",
              transitTime: "28-32 days ",
              unitPricePerKg: 26.0,
              fixedFeePerShipment: 100,
            },
            {
              mode: "Rail",
              schemeName: "China-Europe Railway Express DDP",
              transitTime: "30-35 days ",
              unitPricePerKg: 16.5,
              fixedFeePerShipment: 150,
            },
            {
              mode: "Sea",
              schemeName: "Standard Sea Freight DDP",
              transitTime: "45-50 days ",
              unitPricePerKg: 13.5,
              fixedFeePerShipment: 100,
            },
          ],
        },
      ],
    },
    {
      country: "Canada",
      countryCn: "Canada",
      cities: [
        {
          city: "Belleville / Toronto area, ON",
          zipcode: "K8N 0K9 / M5H",
          schemes: [
            {
              mode: "Sea",
              schemeName: "Canada Slow Boat Direct DDP",
              transitTime: "33-38 days ",
              unitPricePerKg: 20.7,
              fixedFeePerShipment: 0,
            },
          ],
        },
        {
          city: "Calgary, AB",
          zipcode: "T2E 0J3",
          schemes: [
            {
              mode: "Sea",
              schemeName: "Canada Express Sea Freight DDP",
              transitTime: "28-35 days ",
              unitPricePerKg: 21.0,
              fixedFeePerShipment: 0,
            },
            {
              mode: "Sea",
              schemeName: "Canada Slow Boat Sea Freight DDP",
              transitTime: "33-38 days ",
              unitPricePerKg: 19.5,
              fixedFeePerShipment: 0,
            },
          ],
        },
      ],
    },
    {
      country: "Australia",
      countryCn: "Australia",
      cities: [
        {
          city: "Sydney / Melbourne / Brisbane",
          zipcode: "2000 / 3000 / 4000",
          schemes: [
            {
              mode: "Sea",
              schemeName: "Australia Direct Sea Line DDP",
              transitTime: "25-32 days ",
              unitPricePerKg: 18.0,
              fixedFeePerShipment: 0,
            },
          ],
        },
      ],
    },
    {
      country: "Netherlands",
      countryCn: "Netherlands",
      cities: [
        {
          city: "Veenendaal / Zoetermeer",
          zipcode: "3901JV / 2728BH",
          schemes: [
            {
              mode: "Sea",
              schemeName: "Netherlands Sea Freight DDP Option 1",
              transitTime: "50-55 days ",
              unitPricePerKg: 14.5,
              fixedFeePerShipment: 150,
            },
            {
              mode: "Truck",
              schemeName: "Rail/Truck Pickup",
              transitTime: "30-35 days ",
              unitPricePerKg: 14.0,
              fixedFeePerShipment: 0,
            },
          ],
        },
      ],
    },
    {
      country: "Malaysia",
      countryCn: "Malaysia",
      cities: [
        {
          city: "Peninsular Malaysia (Kuala Lumpur / Penang / Johor Bahru, etc.)",
          zipcode: "50000",
          schemes: [
            {
              mode: "Sea",
              schemeName:
                "West Malaysia Door-to-Door Sea Freight (Tax Included)",
              transitTime: "15-20 days ",
              unitPricePerKg: 11.0,
              fixedFeePerShipment: 0,
            },
          ],
        },
      ],
    },
  ],
};

const PRODUCT_DATA = {
  currency: "USD",
  dataVersion: "2026.10",
  baseBoothModels: [
    {
      showImg: true,
      id: "1wood_booth_opt1",
      nameCn: "Dual Sided PC + iPad",
      nameEn: "",
      introduction:
        "18.5 inch touchscreen with built-in PC;Intel Core i5 6th Gen processor, 8GB RAM and 256GB SSD;Built-in speaker and cooling fan;Bluetooth and Wi-Fi support;Integrated power system;Adjustable camera mount;Front iPad slot panel;Protective flight case packaging",
      weight: 29,
      priceUsd: 820,
    },
    {
      showImg: true,
      id: "1wood_booth_opt2",
      nameCn: "Dual Sided Dual Touchscreen",
      nameEn: "",
      introduction:
        "Dual touchscreen design: 18.5 inch + 14 inch ;Built-in PC configuration;Integrated power system;Adjustable camera mount;Wooden enclosure with vintage styling;Supports customizable accessories and finishe",
      weight: 29,
      priceUsd: 1013,
    },
    {
      showImg: true,
      id: "1wood_booth_opt3",
      nameCn: "Single Sided iPad + DSLR",
      nameEn: "",
      introduction: "",
      weight: 29,
      priceUsd: 450,
    },
    {
      showImg: true,
      id: "1wood_booth_opt4",
      nameCn: '15.6" Touchscreen with Printer Support',
      nameEn: "",
      introduction:
        '15.6" horizontal touchscreen with built-in PC;          Printer-compatible design with pull-out photo drawer;          Camera mounting position;          LED fill light;          Three-leg stand;          Natural oak-style wooden finish;          Compatible with DNP DS620 printer;',
      weight: 29,
      priceUsd: 1200,
    },
    {
      showImg: true,
      id: "1wood_booth_opt5",
      nameCn: 'Single Sided 14" Touchscreen',
      nameEn: "",
      introduction: "",
      weight: 29,
      priceUsd: 820,
    },
    {
      showImg: true,
      id: "1wood_booth_opt6",
      nameCn: "Single Sided iPad Shell",
      nameEn: "",
      introduction: "",
      weight: 29,
      priceUsd: 495,
    },
    {
      showImg: true,
      id: "1wood_booth_opt7",
      nameCn: 'Single Sided 15.6" Touchscreen',
      nameEn: "",
      introduction: "",
      weight: 29,
      priceUsd: 850,
    },
  ],

  accessoriesAndModules: {
    printerStands: [
      {
        showImg: true,
        id: "2acc_stand_11",
        nameCn: "Compatible with DPN RX1HS / HITI P525L Printer",
        introduction: "",
        weight: 27,
        priceUsd: 250,
      },
      {
        showImg: true,
        id: "2acc_stand_12",
        nameCn: "Compatible with DNP DS620 Printer",
        introduction: "",
        weight: 27,
        priceUsd: 250,
      },
      {
        showImg: true,
        id: "2acc_stand_14",
        nameCn: "Customizable to Fit QW410, D70 and Other Printers",
        introduction: "",
        weight: 27,
        priceUsd: 280,
      },
    ],
    lighting: [
      {
        showImg: true,
        id: "3nice_GY180",
        nameCn: "NiceFoto GY180+Softbox Umbrella",
        introduction: "",
        weight: 2,
        priceUsd: 80,
      },
      {
        showImg: true,
        id: "3godox_ms200v",
        nameCn: "GODOX MS200V+Beauty Dish Reflector+Flash Trigger",
        introduction: "",
        weight: 2,
        priceUsd: 120,
      },
      {
        showImg: true,
        id: "3godox_ms300v",
        nameCn: "GODOX MS300V+Beauty Dish Reflector+Flash Trigger",
        introduction: "",
        weight: 2,
        priceUsd: 160,
      },
      {
        showImg: true,
        id: "3godox_ms3002v",
        nameCn: "GODOX SK300IIV+Beauty Dish Reflector+Flash Trigger",
        introduction: "",
        weight: 2,
        priceUsd: 160,
      },
      {
        showImg: true,
        id: "3godox_ms4002v",
        nameCn: "GODOX SK400IIV+Beauty Dish Reflector+Flash Trigger",
        introduction: "",
        weight: 2,
        priceUsd: 180,
      },
    ],
    lightStand: [
      {
        showImg: true,
        id: "4stand_01",
        nameCn: "Straight Stand 15cm",
        introduction: "",
        weight: 0,
        priceUsd: 2,
      },
      {
        showImg: true,
        id: "4stand_04",
        nameCn: "Tripod Stand",
        introduction: "",
        weight: 0.5,
        priceUsd: 50,
      },
    ],
    printers: [
      {
        showImg: true,
        id: "5acc_printer_rx1hs",
        nameCn: "DNP RX1HS",
        introduction: "",
        weight: 20,
        priceUsd: 676,
      },
      {
        showImg: false,
        id: "5acc_printer_rx1hspaper",
        nameCn: "DNP RX1HS Photo Paper",
        introduction: "",
        weight: 10,
        priceUsd: 229,
      },
      {
        showImg: true,
        id: "5acc_printer_ds620",
        nameCn: "DNP DS620",
        introduction: "",
        weight: 20,
        priceUsd: 1075,
      },
      {
        showImg: false,
        id: "5acc_printer_ds620paper",
        nameCn: "DNP DS620 Photo Paper",
        introduction: "",
        weight: 10,
        priceUsd: 176,
      },
      {
        showImg: true,
        id: "5acc_printer_qw410",
        nameCn: "DNP QW410",
        introduction: "",
        weight: 20,
        priceUsd: 573,
      },
      {
        showImg: false,
        id: "5acc_printer_qw410paper",
        nameCn: "DNP QW410  Photo Paper",
        introduction: "",
        weight: 10,
        priceUsd: 84,
      },
      {
        showImg: true,
        id: "5acc_printer_p525l",
        nameCn: "HITI P525L",
        introduction: "",
        weight: 20,
        priceUsd: 543,
      },
      {
        showImg: false,
        id: "5acc_printer_p525lpaper",
        nameCn: "HITI P525L Photo Paper",
        introduction: "",
        weight: 10,
        priceUsd: 152,
      },
    ],
    camerasAndPower: [
      {
        showImg: true,
        id: "acc_cam_canon_r100",
        nameCn: "Canon EOS R100 Mirrorless Camera Kit (with lens)",
        introduction: "",
        weight: 1,
        priceUsd: 470,
      },
    ],
    audio: [
      {
        showImg: true,
        id: "7audio_marshall",
        nameCn: "Marshall Bluetooth Speaker",
        introduction: "",
        weight: 0,
        priceUsd: 120,
      },
      {
        showImg: true,
        id: "7audio_pullRod",
        nameCn: "Retractable Trolley Handle",
        introduction: "",
        weight: 0,
        priceUsd: 60,
      },
      {
        showImg: false,
        id: "7audio_Color",
        nameCn: "Custom Color",
        introduction: "",
        weight: 0,
        priceUsd: 80,
      },
      {
        showImg: true,
        id: "7audio_handle",
        nameCn: "Carry Handle",
        introduction: "",
        weight: 0,
        priceUsd: 20,
      },
      {
        showImg: true,
        id: "7audio_motherBoard",
        nameCn: "motherBoard Update i5-6th-8G",
        introduction: "",
        weight: 0,
        priceUsd: 20,
      },
      {
        showImg: true,
        id: "7audio_sftLightUmbrella",
        nameCn: "Softbox Umbrella",
        introduction: "",
        weight: 0,
        priceUsd: 10,
      },
      {
        showImg: false,
        id: "7audio_panelLock",
        nameCn: "Panel Lock",
        introduction: "",
        weight: 0,
        priceUsd: 5,
      },
      {
        showImg: true,
        id: "7audio_roundpall",
        nameCn: "Rounded Panel Corners",
        introduction: "",
        weight: 0,
        priceUsd: 50,
      },
    ],
  },
  // "recommendedTurnkeyPackages": [
  //   { "packageId": "pkg_starter_diy", "packageNameCn": "入门创业包 (自带相机与打印机)", "packagePriceUsd": 1320, "discountUsd": 50 },
  //   { "packageId": "pkg_standard_pro", "packageNameCn": "标准专业包 (含佳能单反全套)", "packagePriceUsd": 1890, "discountUsd": 70 },
  //   { "packageId": "pkg_turnkey_complete", "packageNameCn": "一站式全套商用豪华包 (到手即用)", "packagePriceUsd": 2480, "discountUsd": 100 }
  // ]
};

 
const RMB_TO_USD = 0.14; // TODO: 按实际汇率调整
