import Cryptr from "cryptr";

const cryptrObj = new Cryptr("12345");

const text = "f0ec7e5b22520b48a1dcb645a7f97c4f52778554506033f00a0e14189f09b7b2c37e7872732b02d1148cb71fa619d3b4aa2cbaf4f45dc3bd6bc533f3d544e51935156e27bb1e8769f69da46b87a071d30ad654c67dc7ec13c06e2c574133bbda5ab28007f3"

console.log(cryptrObj.decrypt(text));
