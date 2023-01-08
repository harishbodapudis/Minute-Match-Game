import './index.css'

const TabsList = props => {
  const {tabsList, changeTabs, categorySelected} = props
  const {tabId, displayText} = tabsList

  const changeTabsDisplay = () => {
    changeTabs(tabId)
  }
  const activeTab = categorySelected === tabId ? 'active' : ''
  return (
    <li className="tab-items">
      <button
        type="button"
        className={`tab-btn ${activeTab}`}
        onClick={changeTabsDisplay}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabsList
