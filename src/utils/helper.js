export function languageSelector(lan, val) {
  if (lan === "english") {
    return val[0];
  } else if (lan === "hindi") {
    return val[1];
  } else if (lan === "gujarati") {
    return val[2];
  }

  return val[0];
}
