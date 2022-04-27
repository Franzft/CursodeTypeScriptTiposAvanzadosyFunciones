// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;


// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(""); // string
//   } else {
//     return input.split(""); // string[]
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(""); // string
  } else if (typeof input === "string"){
    return input.split(""); // string[]
  } else if (typeof input === "number"){
    return true; // boolean
  }
}

const rtaArray = parseStr("Franz");
rtaArray.reverse();
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }
console.log("rtaArray", "Franz =>" ,rtaArray);

const rtaStr = parseStr(["F","r","a","n","z"]);
rtaStr.toLowerCase();
// if (typeof rtaStr === "string") {
//   rtaStr.toLowerCase();
// }
console.log("rtaStr", '["F","r","a","n","z"] =>',rtaStr);

const rtaBoolean = parseStr(12);
