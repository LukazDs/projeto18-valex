export function mapObjectToUpdateQuery({ object: {}, offset=1 }) {

  const objectColumns: string = Object.keys(Object)
    .map((key, index) => `"${key}"=$${index + offset}`)
    .join(",");

  const objectValues: string[] = Object.values(Object);

  return { objectColumns, objectValues };
}
