import { useParams } from "react-router-dom";
import PageHeader from "../../components/Cards/PageHeader";
import "./collectionInside.scss";

import { collectionsData } from "../../assets/mockData/collectionsData ";

export default function CollectionInside() {
  const { id } = useParams();

  const collection = collectionsData.find((item) => item.id === Number(id));

  if (!collection) return null;

  return (
    <>
      <PageHeader title={`Collections - ${collection.title}`} breadcrumb={`Home /Collections`} />

      {/* <div className="collection-inside container">
        <div className="images-grid">
          {collection.images.map((img, index) => (
            <div className="image-card" key={index}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div> */}
      <div className="collection-inside container pt-[50px]! pb-[clamp(150px,6vw,500px)]!">
        {/* LEFT FILTERS */}
        <aside className="filters">
          <select>
            <option>Collections</option>
          </select>
          <select>
            <option>Region</option>
          </select>
          <select>
            <option>Time period</option>
          </select>
          <select>
            <option>Technique</option>
          </select>
          <select>
            <option>Color</option>
          </select>
        </aside>

        {/* RIGHT GRID */}
        {/* <div className="images-grid">
          {collection.images.map((img, index) => (
            <div key={index} className={`image-card ${index % 5 === 0 ? "wide" : ""}`}>
              <img src={img} alt="" />
              <div className="overlay">
                <span>{collection.title}</span>
              </div>
            </div>
          ))}
        </div> */}
        <div className="images-grid">
          {collection.images.map((img, index) => (
            <div key={index} className="image-card">
              <img src={img} alt="" />
              <div className="overlay">
                <span>{collection.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
