import React, { useState } from "react";
import { useHistory } from "react-router";
import Collapse from 'react-bootstrap/Collapse';

function Sidebar() {

  const history = useHistory();
  const clicked = (str) => {
    history.push("/products/" + str);
    console.log(str);
  }
  const [open, setOpen] = useState(
    {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
      15: false,
      16: false,
      17: false,
      18: false,
      19: false,
      20: false,
      21: false,
      22: false,
      23: false, 
    }
  );

  // var collapsibleStates = {
  //   1: false,
  //   2: false,
  //   3: false,
  //   4: false,
  //   5: false,
  //   6: false,
  //   7: false,
  //   8: false,
  //   9: false,
  //   10: false,
  //   11: false,
  //   12: false,
  //   13: false,
  //   14: false,
  //   15: false,
  //   16: false,
  //   17: false,
  //   18: false,
  //   19: false,
  //   20: false,
  //   21: false,
  //   22: false,
  //   23: false, 
  // }

  // function changeState(num){
  //   collapsibleStates[num] = !collapsibleStates[num];
  // }


  // function collapseItem(event) {
  //     var targetElement = event.target;

  //     while(targetElement.tagName.toLowerCase() != 'p'){
  //         targetElement = targetElement.parentElement;
  //     }

  //     console.log(event.target);
  //     console.log(event.target.parentElement);

  //     //var targetElement = event.target;
  //     var state = targetElement.getAttribute("aria-expanded");
  //     var elementId = targetElement.getAttribute("aria-controls");
  //     var collapsibleItem = document.getElementById(elementId);
  //     if(state == 'false'){
  //         targetElement.setAttribute("aria-expanded", "true");
  //         collapsibleItem.classList.remove("collapse");
  //         collapsibleItem.classList.add("collapsing");
  //         collapsibleItem.classList.remove("collapsing");
  //         collapsibleItem.classList.add("collapse", "show");
  //     }
  //     else{
  //         collapsibleItem.classList.remove("collapse", "show");
  //         collapsibleItem.classList.add("collapsing");
  //         collapsibleItem.classList.remove("collapsing");
  //         collapsibleItem.classList.add("collapse");
  //         targetElement.setAttribute("aria-expanded", "false");
  //     }
  // }

  return (
    <nav id="sidebar">
      <div className="sidebar-header"></div>

        <ul className="list-unstyled components">
        <p>Category List</p>
        <li className="sidebar-item-cursor">
          <p onClick={clicked}><i className="me-2 twa twa-lg twa-shopping-bags"></i> Popular</p>
        </li>
        <li className="sidebar-item-cursor">
          <p onClick={clicked}><i className="me-2 twa twa-lg twa-roll-of-paper"></i> Hygiene</p>
        </li>
        <li className="sidebar-item-cursor">
          <p onClick={clicked}><i className="me-2 twa twa-lg twa-high-voltage"></i> Flash Sales</p>
        </li>
        <li className="sidebar-item-cursor">
          <p style={{display: "flex"}} onClick={() => {setOpen({...open,1:!open[1] });}} aria-controls="BabyCareSubmenu" aria-expanded={open[1]} className="justify-content-between"><span><i className="me-2 twa twa-lg twa-baby-bottle"></i> Baby Care </span><span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
          <Collapse in={open[1]}>
          <ul id="BabyCareSubmenu">
            <li className="sidebar-item-cursor">
              <p onClick={clicked}>Newborn Essensials</p>
            </li>
            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,2:!open[2] });}} aria-controls="DiaperWipeSubmenu" aria-expanded={open[2]} className="justify-content-between"><span>Diapers & Wipes</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[2]}>
              <ul id="DiaperWipeSubmenu" aria-controls="DiaperWipeSubmenu">
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Wipes</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Diapers</p>
                </li>
                </ul>
              </Collapse>
              
            </li>
            <li className="sidebar-item-cursor">
              <p onClick={clicked}>Feeders</p>
            </li>
            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,3:!open[3] });}} aria-controls="FoodingSubmenu" aria-expanded={open[3]} className="justify-content-between"><span>Fooding</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[3]}>
              <ul id="FoodingSubmenu" aria-controls="FoodingSubmenu">
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Formula</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Baby & Toddler Food</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Milk, Juice & Drinks</p>
                </li>
                </ul>
              </Collapse>
              
            </li>
            <li className="sidebar-item-cursor">
              <p onClick={clicked}>Bath & Skincare</p>
            </li>
            <li className="sidebar-item-cursor">
              <p onClick={clicked}>Baby Accessories</p>
            </li>
            <li className="sidebar-item-cursor">
              <p onClick={clicked}>Baby Oral Care</p>
            </li>
            </ul>
          </Collapse>
          
        </li>
        <li className="sidebar-item-cursor">
       <p style={{display: "flex"}} onClick={() => {setOpen({...open,4:!open[4] });}} aria-controls="PetcareSubmenu" aria-expanded={open[4]} className="justify-content-between"><span><i className="me-2 twa twa-lg twa-petri-dish"></i> Pet Care</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
          <Collapse in={open[4]}>
          <ul id="PetcareSubmenu" aria-controls="PetcareSubmenu">
            <li className="sidebar-item-cursor">
              <p onClick={clicked}>Kitten Food</p>
            </li>
            <li className="sidebar-item-cursor">
              <p onClick={clicked}>Cat Food</p>
            </li>
            <li className="sidebar-item-cursor">
              <p onClick={clicked}>Dog Food</p>
            </li>
            <li className="sidebar-item-cursor">
              <p onClick={clicked}>Other Pet Foods</p>
            </li>
            <li className="sidebar-item-cursor">
              <p onClick={clicked}>Pet Accessories</p>
            </li>
            </ul>
          </Collapse>
          
        </li>
        <li className="sidebar-item-cursor">
       <p style={{display: "flex"}} onClick={() => {setOpen({...open,5:!open[5] });}} aria-controls="FoodSubmenu" aria-expanded={open[5]} className="justify-content-between"><span><i className="me-2 twa twa-lg twa-fork-and-knife-with-plate"></i> Food </span><span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
          <Collapse in={open[5]}>
          <ul id="FoodSubmenu" aria-controls="FoodSubmenu">
            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,6:!open[6] });}} aria-controls="FruitsvegSubmenu" aria-expanded={open[6]} className="justify-content-between"><span>Fruits & Vegetable</span><span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[6]}>
              <ul id="FruitsvegSubmenu" aria-controls="FruitsvegSubmenu">

                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Fresh Fruits</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Fresh Vegetables</p>
                </li>
                </ul>
              </Collapse>
              
            </li>
            <li className="sidebar-item-cursor">
             <p style={{display: "flex"}} onClick={() => {setOpen({...open,7:!open[7] });}} aria-controls="BreakfastSubmenu" aria-expanded={open[7]} className="justify-content-between"><span>Breakfast</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[7]}>
              <ul id="BreakfastSubmenu" aria-controls="BreakfastSubmenu">

                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Local Breakfast</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Energy Boosters</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Cereals</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>jam & Spreads</p>
                </li>
                </ul>
              </Collapse>
              
            </li>

            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,8:!open[8] });}} aria-controls="BeveragesSubmenu" aria-expanded={open[8]} className="justify-content-between"><span>Beverages</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[8]}>
              <ul id="BeveragesSubmenu" aria-controls="BeveragesSubmenu">
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Tea</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Coffee</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Juice</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Soft Drinks</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Water</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Syrups & Powder Drinks</p>
                </li>
                </ul>
              </Collapse>
              
            </li>
            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,9:!open[9] });}} aria-controls="MeatfishSubmenu" aria-expanded={open[9]} className="justify-content-between"><span>Meat & Fish</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[9]}>
              <ul id="MeatfishSubmenu" aria-controls="MeatfishSubmenu">
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Meat</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Frozen Fish</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Dried Fish</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Tofu & Meat Alternatives</p>
                </li>
                </ul>
              </Collapse>
              
            </li>

            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,10:!open[10] });}} aria-controls="SnacksSubmenu" aria-expanded={open[10]} className="justify-content-between"><span>Snacks</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[10]}>
              <ul id="SnacksSubmenu" aria-controls="SnacksSubmenu">
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Noodles</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Soup</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Pasta & Macaroni</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Candy & Chocolate</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Local Snacks</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Chips & Pretzels</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Popcorn & Nuts</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Buiscuits</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Salad Dressing</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Sauces</p>
                </li>
                </ul>
              </Collapse>
              
            </li>

            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,11:!open[11] });}} aria-controls="DairySubmenu" aria-expanded={open[11]} className="justify-content-between"><span>Dairy</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[11]}>
              <ul id="DairySubmenu" aria-controls="DairySubmenu">
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Liquid & UHT Milk</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>butter & Sour Cream</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Cheese</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Eggs</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Powder Milk & Cream</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Yogurt & Sweet</p>
                </li>
                </ul>
              </Collapse>
              
            </li>
            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,12:!open[12] });}} aria-controls="FrozencanSubmenu" aria-expanded={open[12]} className="justify-content-between"><span>Frozen & Canned</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[12]}>
              <ul id="FrozencanSubmenu" aria-controls="FrozencanSubmenu">
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Frozen Snacks</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Canned Food</p>
                </li>
                </ul>
              </Collapse>
              
            </li>
            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,13:!open[13] });}} aria-controls="BreadbakeSubmenu" aria-expanded={open[13]} className="justify-content-between"><span>Bread & Bakery</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[13]}>
              <ul id="BreadbakeSubmenu" aria-controls="BreadbakeSubmenu">
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Cookies</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>bakery Snacks</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Breads</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Dips & Spreads</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Honey</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Cakes</p>
                </li>
                </ul>
              </Collapse>
              
            </li>

            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,14:!open[14] });}} aria-controls="BakingSubmenu" aria-expanded={open[14]} className="justify-content-between"><span>Baking Needs</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[14]}>
              <ul id="BakingSubmenu" aria-controls="BakingSubmenu">
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Nuts & Dried Fruits</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Baking Tools</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Baking & Desset Mixes</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Baking Ingredients</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Flour</p>
                </li>
                </ul>
              </Collapse>
              
              <li className="sidebar-item-cursor">
             <p style={{display: "flex"}} onClick={() => {setOpen({...open,15:!open[15] });}} aria-controls="CookingSubmenu" aria-expanded={open[15]} className="justify-content-between"><span>Cooking</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
                <Collapse in={open[15]}>
                <ul id="CookingSubmenu" aria-controls="CookingSubmenu">
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}>Rice</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}>Premium Ingredients</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}> Colors & Flavours</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}> Pickles</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}> Spices</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}>Oil</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}>Ghee</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}>Ready Mix</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}>Salt & Sugar</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}>Dal or Lentil</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}>Special Ingredients</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}>Shemai & Shuji</p>
                  </li>
                  </ul>
                </Collapse>
                
              </li>
              <li className="sidebar-item-cursor">
                <p onClick={clicked}>Diabetic Food</p>
              </li>
              </li>
              </ul>
            </Collapse>
            
        </li>
          <li className="sidebar-item-cursor">
         <p style={{display: "flex"}} onClick={() => {setOpen({...open,16:!open[16] });}} aria-controls="HomeCleaningSubmenu" aria-expanded={open[16]} className="justify-content-between"><span><i className="me-2 twa twa-lg twa-plunger"></i> Home & Cleaning</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
            <Collapse in={open[16]}>
            <ul id="HomeCleaningSubmenu" aria-controls="HomeCleaningSubmenu">
              <li className="sidebar-item-cursor">
                <p onClick={clicked}>Air Fresheners</p>
              </li>
              <li className="sidebar-item-cursor">
                <p onClick={clicked}>Dish Detergents</p>
              </li>
              <li className="sidebar-item-cursor">
                <p onClick={clicked}>Cleaning Supplies</p>
              </li>
              <li className="sidebar-item-cursor">
                <p onClick={clicked}>Kitchen Accessories</p>
              </li>
              <li className="sidebar-item-cursor">
                <p onClick={clicked}>Laundry</p>
              </li>
              <li className="sidebar-item-cursor">
                <p onClick={clicked}>Napkins & Paper Products</p>
              </li>
              <li className="sidebar-item-cursor">
                <p onClick={clicked}>Pest Control</p>
              </li>
              <li className="sidebar-item-cursor">
                <p onClick={clicked}>Shoe Care</p>
              </li>
              <li className="sidebar-item-cursor">
                <p onClick={clicked}>Tableware & Trash Bags</p>
              </li>
              <li className="sidebar-item-cursor">
                <p onClick={clicked}>Food Storage</p>
              </li>
              <li className="sidebar-item-cursor">
                <p onClick={clicked}>Cleaning Accessories</p>
              </li>
              </ul>
            </Collapse>
            
          </li>
          <li className="sidebar-item-cursor">
         <p style={{display: "flex"}} onClick={() => {setOpen({...open,17:!open[17] });}} aria-controls="OfficeSubmenu" aria-expanded={open[17]} className="justify-content-between"><span><i className="me-2 twa twa-lg twa-briefcase"></i> Office Products</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
            <Collapse in={open[17]}>
            <ul id="OfficeSubmenu" aria-controls="OfficeSubmenu">
              <li className="sidebar-item-cursor">
                <p onClick={clicked}>Batteries</p>
              </li>
              <li className="sidebar-item-cursor">
                <p onClick={clicked}>Writing & Drawing</p>
              </li>
              <li className="sidebar-item-cursor">
                <p onClick={clicked}>Organizing</p>
              </li>
              <li className="sidebar-item-cursor">
                <p onClick={clicked}>Printing</p>
              </li>
              </ul>
            </Collapse>

          </li>
          <li className="sidebar-item-cursor">
         <p style={{display: "flex"}} onClick={() => {setOpen({...open,18:!open[18] });}} aria-controls="BeautySubmenu" aria-expanded={open[18]} className="justify-content-between"><span><i className="me-2 twa twa-lg twa-lipstick"></i> Beauty & Health</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
            <Collapse in={open[18]}>
            <ul id="BeautySubmenu" aria-controls="BeautySubmenu">
              <li className="sidebar-item-cursor">
             <p style={{display: "flex"}} onClick={() => {setOpen({...open,19:!open[19] });}} aria-controls="HealthcaSubmenu" aria-expanded={open[19]} className="justify-content-between"><span>Health Care</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
                <Collapse in={open[19]}>
                <ul id="HealthcaSubmenu" aria-controls="HealthcaSubmenu">
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}>Food Suppliment</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}>Herbal & Digestive Aids</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}>First Aid</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}>Family Planning</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}>Antiseptics</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}>Adult Diapers</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p onClick={clicked}>Keto Food</p>
                  </li>
                  </ul>
                </Collapse>
              </li>
             <p style={{display: "flex"}} onClick={() => {setOpen({...open,20:!open[20] });}} aria-controls="PersonalSubmenu" aria-expanded={open[20]} className="justify-content-between"><span>Personal Care</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[20]}>
              <ul id="PersonalSubmenu" aria-controls="PersonalSubmenu">
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Clothing Essentials</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Women's Care</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Men's Care</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Hair Color</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Oral Care</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Skin Care</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Handwash</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Tissue & Wipes</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p onClick={clicked}>Telcom Powder</p>
                </li>
                </ul>
              </Collapse>

        {/* </li> */}
        </ul>
      </Collapse>

        </li>
        <li className="sidebar-item-cursor">
       <p style={{display: "flex"}} onClick={() => {setOpen({...open,21:!open[21] });}} aria-controls="HomeappSubmenu" aria-expanded={open[21]} className="justify-content-between"><span><i className="me-2 twa twa-lg twa-chair"></i> Home Appliances</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
          <Collapse in={open[21]}>
          <ul id="HomeappSubmenu" aria-controls="HomeappSubmenu">
            <li className="sidebar-item-cursor">
              <p onClick={clicked}>Lights & Electrical</p>
            </li>
            <li className="sidebar-item-cursor">
              <p onClick={clicked}>Tools & Hardware</p>
            </li>
            <li className="sidebar-item-cursor">
              <p onClick={clicked}>Kitchen Appliances</p>
            </li>
            </ul>
          </Collapse>

        </li>
        <li onClick={() => clicked("meat")} className="sidebar-item-cursor">
          <p><i className="me-2 twa twa-lg twa-gear"></i> Vehicle Essensials</p>
        </li>
        </ul>
    </nav>
  );
}
export default Sidebar;