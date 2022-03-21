import './index.css'

const CardItem = () => (
  <div className="cardContainer">
    <li className="product-item">
      <h1 className="title">The Evolution of UI/UX</h1>
      <p className="subline">is simplicity?</p>
      <div className="discuss-team-details">
        <p className="unDiscuss">un discuss</p>
        <p className="teamUI">team ui</p>
      </div>
      <div className="discuss-team-details">
        <img
          src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/68a651c6-01d6-4b32-909a-3211d5f278a9@2x.png"
          alt="product"
          className="personImage"
        />
        <button type="button" className="approveButton">
          Approve
        </button>
      </div>
    </li>
  </div>
)

export default CardItem
