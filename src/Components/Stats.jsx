export default function Stats({ items }) {
  if (!items.length) {
    return <p className="stats">
      <em>Start adding some items now 🚀</em>
    </p>
  }

  

  const numItems = items.length;
  const numItemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numItemsPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are ready to go ✈️"
          : `You have ${numItems} items on your list, and you already packed
        ${numItemsPacked} (${percentage > 0 ? percentage : 0}%)`}
      </em>
    </footer>
  );
}
