import './index.css'
import PasswordItem from '../PasswordItem'

const PasswordContainer = props => {
  const {
    passwordsList,
    showPassword,
    showPasswordChecked,
    deletePasswordItem,
    updateList,
  } = props

  const deletePassword = id => {
    deletePasswordItem(id)
  }

  let updatedPasswordList = passwordsList

  const searchItem = e => {
    const values = e.target.value
    updatedPasswordList = updateList(values)
  }

  const count = updatedPasswordList.length

  const containPwds =
    updatedPasswordList.length > 0 ? (
      <ul className="passwords-main-container">
        {updatedPasswordList.map(each => (
          <PasswordItem
            passwordItem={each}
            showPassword={showPassword}
            deletePassword={deletePassword}
            key={each.id}
          />
        ))}
      </ul>
    ) : (
      <div className="no-password-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="no-passwords-image"
        />
        <p className="no-password">No Passwords</p>
      </div>
    )

  const checkBox = () => {
    showPasswordChecked()
  }

  return (
    <div className="password-main-container">
      <div className="password-navbar-container">
        <div className="passwords-count-container">
          <h1 className="password-navbar-heading">Your Passwords</h1>
          <p className="count">{count}</p>
        </div>
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
            className="search-image"
          />
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={searchItem}
          />
        </div>
      </div>
      <hr className="separator" />
      <div className="show-passwords-container">
        <input
          type="checkbox"
          id="check-box"
          onClick={checkBox}
          className="check-box"
        />
        <label htmlFor="check-box" className="show-passwords-text">
          Show Passwords
        </label>
      </div>
      {containPwds}
    </div>
  )
}

export default PasswordContainer
