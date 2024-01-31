import {v4 as uuidv4} from 'uuid'
import './index.css'
import {Component} from 'react'
import PasswordContainer from '../PasswordContainer'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    name: '',
    password: '',
    showPassword: false,
    search: '',
  }

  addPassword = e => {
    e.preventDefault()
    const {website, name, password} = this.state
    const color = Math.floor(Math.random() * 10) + 1
    const colorList = `color${color}`
    const newPassword = {
      id: uuidv4(),
      website,
      name,
      password,
      color: colorList,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      name: '',
      password: '',
    }))
  }

  onChangeWebsite = e => {
    const updateWebsite = e.target.value
    this.setState({website: updateWebsite})
  }

  onChangeUsername = e => {
    const updateUsername = e.target.value
    this.setState({name: updateUsername})
  }

  onChangePassword = e => {
    const updatePassword = e.target.value
    this.setState({password: updatePassword})
  }

  showPasswordChecked = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  updateList = props => {
    this.setState({search: props})
  }

  deletePasswordItem = uniqueId => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(
        each => each.id !== uniqueId,
      ),
    }))
  }

  render() {
    const {
      passwordsList,
      website,
      name,
      password,
      showPassword,
      search,
    } = this.state

    let updatedPassword = passwordsList

    updatedPassword = passwordsList.filter(each =>
      each.website.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="main-container">
        <div className="sub-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt=" app logo"
            className="app-logo"
          />
          <div className="add-new-password-main-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="password-manager-image-sm"
            />
            <div className="add-new-password-sub-container">
              <h1 className="heading">Add New Password</h1>
              <form onSubmit={this.addPassword} className="form-container">
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                    alt="website"
                    className="input-images"
                  />
                  <input
                    placeholder="Enter Website"
                    className="input"
                    onChange={this.onChangeWebsite}
                    value={website}
                  />
                </div>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                    alt="username"
                    className="input-images"
                  />
                  <input
                    placeholder="Enter Username"
                    className="input"
                    onChange={this.onChangeUsername}
                    value={name}
                  />
                </div>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                    alt="password"
                    className="input-images"
                  />
                  <input
                    placeholder="Enter Password"
                    className="input"
                    type="password"
                    onChange={this.onChangePassword}
                    value={password}
                  />
                </div>
                <button type="submit" className="submit-button">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt=" password manager"
              className="password-manager-image"
            />
          </div>
        </div>
        <PasswordContainer
          passwordsList={updatedPassword}
          showPassword={showPassword}
          showPasswordChecked={this.showPasswordChecked}
          deletePasswordItem={this.deletePasswordItem}
          updateList={this.updateList}
        />
      </div>
    )
  }
}

export default PasswordManager
