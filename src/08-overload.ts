// Franz => [F,r,a,n,z] => string => string[]
//[F,r,a,n,z] => Franz=> string[] => string


function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(""); // string
  } else {
    return input.split(""); // string[]
  }
}

const rtaArray = parseStr("Franz");
// rtaArray.reverse(); necesita que sepa que es array
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log("rtaArray", "Franz =>" ,rtaArray);

const rtaStr = parseStr(["F","r","a","n","z"]);
// rtaStr.toLowerCase();
if (typeof rtaStr === "string") {
  rtaStr.toLowerCase();
}
console.log("rtaStr", '["F","r","a","n","z"] =>',rtaStr);
