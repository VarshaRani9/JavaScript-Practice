let users = {
  name: "varsha",
  address: {
    personal: {
      city: "DDN",
      area: "xyz",
    },
    office: {
      city: "hyd",
      area: {
        landmark: "illite",
      },
    },
  },
};

let finalobj2 = {};
let magic2 = (obj, parent) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      magic2(obj[key], parent + "_" + key);
    } else {
      finalobj2[parent + "_" + key] = obj[key];
    }
  }
};
magic2(users, "users");
console.log(finalobj2);
