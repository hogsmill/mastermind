


const SelectColor = {

  positionSelect: function(elem, updateMethod) {
    const x = elem.getBoundingClientRect().x + 6
    const y = elem.getBoundingClientRect().y + window.scrollY + 6
    const selectColor = document.getElementById('selectColor')
    selectColor.style.top = y + 'px'
    selectColor.style.left = x + 'px'
    selectColor.style.visibility = 'visible'
    document.getElementById('updateMethod').value = updateMethod
  },

  storeData: function(data) {
    document.getElementById('updateData').value = JSON.stringify(data)
  }
}

export default SelectColor
