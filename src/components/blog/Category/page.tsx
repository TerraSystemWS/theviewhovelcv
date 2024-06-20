const Category: React.FC = () => {
  return (
    <>
      <div className="all__sidebar-item">
        <h5>Category</h5>
        <div className="all__sidebar-item-category">
          <ul>
            <li>
              <a href="#">
                <i className="far fa-angle-double-right"></i>Luxury Room
                <span>(0)</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="far fa-angle-double-right"></i>Small Suite
                <span>(0)</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="far fa-angle-double-right"></i>Single
                <span>(0)</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="far fa-angle-double-right"></i>Family
                <span>(0)</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="far fa-angle-double-right"></i>Double Room
                <span>(0)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Category
