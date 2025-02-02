export default function mergeObjects
<T extends Record<string, any>, U extends Record<string, any>>

(mainObject: T, derivateObject: U): T {
  const result = { ...mainObject } as any; 
  for (const key in derivateObject) {
    if (key in mainObject) result[key] =derivateObject[key];
  }
  return result;
}