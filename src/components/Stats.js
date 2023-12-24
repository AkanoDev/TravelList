export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list now 👔🍴</em>
      </p>
    );

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything packed! Ready to go ✈"
          : `
        💼 You have ${numItem} item on your list, and you already packed
        ${numPacked} (${numItem === 0 ? 0 : percentage}%)`}
      </em>
    </footer>
  );
}
