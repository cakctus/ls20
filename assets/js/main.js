function ageClassification(num) {
  return num > 0
    ? num > 24
      ? num > 44
        ? num > 65
          ? num > 75
            ? num > 90
              ? num > 122
                ? null
                : "долгожители"
              : "старческий возраст"
            : "пожилой возраст"
          : "средний возраст"
        : "молодой возраст"
      : "детский возраст"
    : null
}

function evenFn(n) {
  var arr = []
  for (var i = 1; i < n; i++) {
    arr.push(++i)
  }
  return arr
}
