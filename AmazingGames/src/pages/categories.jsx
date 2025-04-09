import { useState, useEffect } from "react";
import "../css/categories.css";
import { Link } from "react-router";
export default function Categories() {
  const [categoryI, setCategoryI] = useState("");
  let categoryList = [
    "mmorpg",
    "shooter",
    "strategy",
    "moba",
    "racing",
    "sports",
    "social",
    "sandbox",
    "open-world",
    "survival",
    "pvp",
    "pve",
    "pixel",
    "voxel",
    "zombie",
    "turn-based",
    "first-person",
    "third-Person",
    "top-down",
    "tank",
    "space",
    "sailing",
    "side-scroller",
    "superhero",
    "permadeath",
    "card",
    "battle-royale",
    "mmo",
    "mmofps",
    "mmotps",
    "3d",
    "2d",
    "anime",
    "fantasy",
    "sci-fi",
    "fighting",
    "action-rpg",
    "action",
    "military",
    "martial-arts",
    "flight",
    "low-spec",
    "tower-defense",
    "horror",
    "mmorts",
  ];

  return (
    <div className="container">
      <h1 className="title">Categories</h1>
      {categoryList.map((category, i) => (
        <div className="card card-cat" key={i}>
          <button
            className="btn btn-lg btn-cat"
            onClick={() => {
              setCategoryI(category);
            }}
          >
            <Link to={`/categories/${category}`}>{category}</Link>
          </button>
        </div>
      ))}
    </div>
  );
}
