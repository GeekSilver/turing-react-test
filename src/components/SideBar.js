import React, { Fragment } from 'react';

const SideBar = ({ categories }) => {
  return (
    <Fragment>
      <p className="categories">categories</p>
      <div className="category-listing">
        {
          categories.count > 0 && categories.rows.map((category, i) => {
            return (
              <ul className="category-list" key={`category-${i}`}>
                <li className="category-items"><input type="checkbox" /><p>{category.name}</p></li>
              </ul>
            )
          })
        }
      </div>
    </Fragment>
  );
};

export default SideBar;