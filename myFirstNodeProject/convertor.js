// function cmToInch(cm) {
//   const inch = 0.393701;
//   return cm * inch;
// }

// function klToPn(kl) {
//   const pond = 2.2;
//   return kl * pond;
// }

// option 1 to export

// module.exports = {
//   cmToInch,
//   klToPn,
// };

///option 2 to export - recomended
// module.exports.cmToInch = cmToInch;
// module.exports.klToPn = klToPn;
///shorter comand line
// exports.cmToInch = cmToInch;
// exports.klToPn = klToPn;

//option 3
exports.cmToInch = (cm) => {
  const inch = 0.393701;
  return cm * inch;
};

exports.klToPn = (kl) => {
  const pond = 2.2;
  return kl * pond;
};
