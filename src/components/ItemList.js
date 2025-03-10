const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border bottom-0">
          <div>
            <span>{item.card.info.name}</span>
            <span>{item.card.info.price}</span>
            <span>{item.card.info.name}</span>
          </div>
          <p>{item.card.info.description}</p>

          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-xl ">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
