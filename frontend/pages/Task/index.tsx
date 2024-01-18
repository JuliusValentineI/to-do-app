import { fetchData } from "./data";

const Task = ({ items }) => {
  let itemsp = JSON.parse(items);

  return (
    <>
      <ul>
        {itemsp.map((item) => (
          <li key={item.pk}>
            <div>
              {item.fields ? (
                <>
                  <span>Name: {item.fields.name || "N/A"}</span>
                  <br />
                  <span>Date: {item.fields.date || "N/A"}</span>
                  <br />
                  <span>Description: {item.fields.description || "N/A"}</span>
                  <br />
                  <span>State: {item.fields.state || "N/A"}</span>
                  <br />
                  <span>Priority: {item.fields.priority || "N/A"}</span>
                  <br />
                </>
              ) : (
                <span>Fields not available</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const items = await fetchData();

  return {
    props: {
      items,
    },
  };
}

export default Task;
