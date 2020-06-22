


var SelectColor = {

  positionSelect: function(elem, updateMethod) {
    var x = elem.getBoundingClientRect().x + 6
    var y = elem.getBoundingClientRect().y + 6
    var selectColor = document.getElementById('selectColor')
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
