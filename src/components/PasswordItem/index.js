import './index.css'

const PasswordItem = props => {
  const {passwordItem, showPassword, deletePassword} = props
  const {website, name, password, id, color} = passwordItem
  const updatePassword = showPassword ? (
    <p className="password">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-image"
    />
  )

  const deleteItem = () => {
    deletePassword(id)
  }

  const firstLetter = website[0].toUpperCase()

  return (
    <li className="password-item-container">
      <p className={`password-logo ${color}`}>{firstLetter}</p>
      <div className="password-container">
        <p className="website-name">{website}</p>
        <p className="name">{name}</p>
        {updatePassword}
      </div>
      <button
        type="button"
        onClick={deleteItem}
        className="delete-button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt=" delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default PasswordItem
