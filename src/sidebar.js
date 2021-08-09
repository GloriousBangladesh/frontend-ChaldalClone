import React, { useState } from "react";
import Collapse from 'react-bootstrap/Collapse';

function Sidebar() {
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
          <p href="#"><i className="me-2 twa twa-lg twa-shopping-bags"></i> Popular</p>
        </li>
        <li className="sidebar-item-cursor">
          <p href="#"><i className="me-2 twa twa-lg twa-roll-of-paper"></i> Hygiene</p>
        </li>
        <li className="sidebar-item-cursor">
          <p href="#"><i className="me-2 twa twa-lg twa-high-voltage"></i> Flash Sales</p>
        </li>
        <li className="sidebar-item-cursor">
          <p style={{display: "flex"}} onClick={() => {setOpen({...open,1:!open[1] });}} aria-controls="BabyCareSubmenu" aria-expanded={open[1]} className="justify-content-between"><span><i className="me-2 twa twa-lg twa-baby-bottle"></i> Baby Care </span><span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
          <Collapse in={open[1]}>
          <ul id="BabyCareSubmenu">
            <li className="sidebar-item-cursor">
              <p href="#">Newborn Essensials</p>
            </li>
            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,2:!open[2] });}} aria-controls="DiaperWipeSubmenu" aria-expanded={open[2]} className="justify-content-between"><span>Diapers & Wipes</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[2]}>
              <ul id="DiaperWipeSubmenu" aria-controls="DiaperWipeSubmenu">
                <li className="sidebar-item-cursor">
                  <p href="#">Wipes</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Diapers</p>
                </li>
                </ul>
              </Collapse>
              
            </li>
            <li className="sidebar-item-cursor">
              <p href="#">Feeders</p>
            </li>
            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,3:!open[3] });}} aria-controls="FoodingSubmenu" aria-expanded={open[3]} className="justify-content-between"><span>Fooding</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[3]}>
              <ul id="FoodingSubmenu" aria-controls="FoodingSubmenu">
                <li className="sidebar-item-cursor">
                  <p href="#">Formula</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Baby & Toddler Food</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Milk, Juice & Drinks</p>
                </li>
                </ul>
              </Collapse>
              
            </li>
            <li className="sidebar-item-cursor">
              <p href="#">Bath & Skincare</p>
            </li>
            <li className="sidebar-item-cursor">
              <p href="#">Baby Accessories</p>
            </li>
            <li className="sidebar-item-cursor">
              <p href="#">Baby Oral Care</p>
            </li>
            </ul>
          </Collapse>
          
        </li>
        <li className="sidebar-item-cursor">
       <p style={{display: "flex"}} onClick={() => {setOpen({...open,4:!open[4] });}} aria-controls="PetcareSubmenu" aria-expanded={open[4]} className="justify-content-between"><span><i className="me-2 twa twa-lg twa-petri-dish"></i> Pet Care</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
          <Collapse in={open[4]}>
          <ul id="PetcareSubmenu" aria-controls="PetcareSubmenu">
            <li className="sidebar-item-cursor">
              <p href="#">Kitten Food</p>
            </li>
            <li className="sidebar-item-cursor">
              <p href="#">Cat Food</p>
            </li>
            <li className="sidebar-item-cursor">
              <p href="#">Dog Food</p>
            </li>
            <li className="sidebar-item-cursor">
              <p href="#">Other Pet Foods</p>
            </li>
            <li className="sidebar-item-cursor">
              <p href="#">Pet Accessories</p>
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
                  <p href="#">Fresh Fruits</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Fresh Vegetables</p>
                </li>
                </ul>
              </Collapse>
              
            </li>
            <li className="sidebar-item-cursor">
             <p style={{display: "flex"}} onClick={() => {setOpen({...open,7:!open[7] });}} aria-controls="BreakfastSubmenu" aria-expanded={open[7]} className="justify-content-between"><span>Breakfast</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[7]}>
              <ul id="BreakfastSubmenu" aria-controls="BreakfastSubmenu">

                <li className="sidebar-item-cursor">
                  <p href="#">Local Breakfast</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Energy Boosters</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Cereals</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">jam & Spreads</p>
                </li>
                </ul>
              </Collapse>
              
            </li>

            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,8:!open[8] });}} aria-controls="BeveragesSubmenu" aria-expanded={open[8]} className="justify-content-between"><span>Beverages</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[8]}>
              <ul id="BeveragesSubmenu" aria-controls="BeveragesSubmenu">
                <li className="sidebar-item-cursor">
                  <p href="#">Tea</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Coffee</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Juice</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Soft Drinks</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Water</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Syrups & Powder Drinks</p>
                </li>
                </ul>
              </Collapse>
              
            </li>
            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,9:!open[9] });}} aria-controls="MeatfishSubmenu" aria-expanded={open[9]} className="justify-content-between"><span>Meat & Fish</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[9]}>
              <ul id="MeatfishSubmenu" aria-controls="MeatfishSubmenu">
                <li className="sidebar-item-cursor">
                  <p href="#">Meat</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Frozen Fish</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Dried Fish</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Tofu & Meat Alternatives</p>
                </li>
                </ul>
              </Collapse>
              
            </li>

            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,10:!open[10] });}} aria-controls="SnacksSubmenu" aria-expanded={open[10]} className="justify-content-between"><span>Snacks</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[10]}>
              <ul id="SnacksSubmenu" aria-controls="SnacksSubmenu">
                <li className="sidebar-item-cursor">
                  <p href="#">Noodles</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Soup</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Pasta & Macaroni</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Candy & Chocolate</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Local Snacks</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Chips & Pretzels</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Popcorn & Nuts</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Buiscuits</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Salad Dressing</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Sauces</p>
                </li>
                </ul>
              </Collapse>
              
            </li>

            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,11:!open[11] });}} aria-controls="DairySubmenu" aria-expanded={open[11]} className="justify-content-between"><span>Dairy</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[11]}>
              <ul id="DairySubmenu" aria-controls="DairySubmenu">
                <li className="sidebar-item-cursor">
                  <p href="#">Liquid & UHT Milk</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">butter & Sour Cream</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Cheese</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Eggs</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Powder Milk & Cream</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Yogurt & Sweet</p>
                </li>
                </ul>
              </Collapse>
              
            </li>
            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,12:!open[12] });}} aria-controls="FrozencanSubmenu" aria-expanded={open[12]} className="justify-content-between"><span>Frozen & Canned</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[12]}>
              <ul id="FrozencanSubmenu" aria-controls="FrozencanSubmenu">
                <li className="sidebar-item-cursor">
                  <p href="#">Frozen Snacks</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Canned Food</p>
                </li>
                </ul>
              </Collapse>
              
            </li>
            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,13:!open[13] });}} aria-controls="BreadbakeSubmenu" aria-expanded={open[13]} className="justify-content-between"><span>Bread & Bakery</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[13]}>
              <ul id="BreadbakeSubmenu" aria-controls="BreadbakeSubmenu">
                <li className="sidebar-item-cursor">
                  <p href="#">Cookies</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">bakery Snacks</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Breads</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Dips & Spreads</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Honey</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Cakes</p>
                </li>
                </ul>
              </Collapse>
              
            </li>

            <li className="sidebar-item-cursor">
           <p style={{display: "flex"}} onClick={() => {setOpen({...open,14:!open[14] });}} aria-controls="BakingSubmenu" aria-expanded={open[14]} className="justify-content-between"><span>Baking Needs</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[14]}>
              <ul id="BakingSubmenu" aria-controls="BakingSubmenu">
                <li className="sidebar-item-cursor">
                  <p href="#">Nuts & Dried Fruits</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Baking Tools</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Baking & Desset Mixes</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Baking Ingredients</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Flour</p>
                </li>
                </ul>
              </Collapse>
              
              <li className="sidebar-item-cursor">
             <p style={{display: "flex"}} onClick={() => {setOpen({...open,15:!open[15] });}} aria-controls="CookingSubmenu" aria-expanded={open[15]} className="justify-content-between"><span>Cooking</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
                <Collapse in={open[15]}>
                <ul id="CookingSubmenu" aria-controls="CookingSubmenu">
                  <li className="sidebar-item-cursor">
                    <p href="#">Rice</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p href="#">Premium Ingredients</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p href="#"> Colors & Flavours</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p href="#"> Pickles</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p href="#"> Spices</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p href="#">Oil</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p href="#">Ghee</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p href="#">Ready Mix</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p href="#">Salt & Sugar</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p href="#">Dal or Lentil</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p href="#">Special Ingredients</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p href="#">Shemai & Shuji</p>
                  </li>
                  </ul>
                </Collapse>
                
              </li>
              <li className="sidebar-item-cursor">
                <p href="#">Diabetic Food</p>
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
                <p href="#">Air Fresheners</p>
              </li>
              <li className="sidebar-item-cursor">
                <p href="#">Dish Detergents</p>
              </li>
              <li className="sidebar-item-cursor">
                <p href="#">Cleaning Supplies</p>
              </li>
              <li className="sidebar-item-cursor">
                <p href="#">Kitchen Accessories</p>
              </li>
              <li className="sidebar-item-cursor">
                <p href="#">Laundry</p>
              </li>
              <li className="sidebar-item-cursor">
                <p href="#">Napkins & Paper Products</p>
              </li>
              <li className="sidebar-item-cursor">
                <p href="#">Pest Control</p>
              </li>
              <li className="sidebar-item-cursor">
                <p href="#">Shoe Care</p>
              </li>
              <li className="sidebar-item-cursor">
                <p href="#">Tableware & Trash Bags</p>
              </li>
              <li className="sidebar-item-cursor">
                <p href="#">Food Storage</p>
              </li>
              <li className="sidebar-item-cursor">
                <p href="#">Cleaning Accessories</p>
              </li>
              </ul>
            </Collapse>
            
          </li>
          <li className="sidebar-item-cursor">
         <p style={{display: "flex"}} onClick={() => {setOpen({...open,17:!open[17] });}} aria-controls="OfficeSubmenu" aria-expanded={open[17]} className="justify-content-between"><span><i className="me-2 twa twa-lg twa-briefcase"></i> Office Products</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
            <Collapse in={open[17]}>
            <ul id="OfficeSubmenu" aria-controls="OfficeSubmenu">
              <li className="sidebar-item-cursor">
                <p href="#">Batteries</p>
              </li>
              <li className="sidebar-item-cursor">
                <p href="#">Writing & Drawing</p>
              </li>
              <li className="sidebar-item-cursor">
                <p href="#">Organizing</p>
              </li>
              <li className="sidebar-item-cursor">
                <p href="#">Printing</p>
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
                    <p href="#">Food Suppliment</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p href="#">Herbal & Digestive Aids</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p href="#">First Aid</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p href="#">Family Planning</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p href="#">Antiseptics</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p href="#">Adult Diapers</p>
                  </li>
                  <li className="sidebar-item-cursor">
                    <p href="#">Keto Food</p>
                  </li>
                  </ul>
                </Collapse>
              </li>
             <p style={{display: "flex"}} onClick={() => {setOpen({...open,20:!open[20] });}} aria-controls="PersonalSubmenu" aria-expanded={open[20]} className="justify-content-between"><span>Personal Care</span> <span><i className="fa fa-angle-down" aria-hidden="true"></i></span></p>
              <Collapse in={open[20]}>
              <ul id="PersonalSubmenu" aria-controls="PersonalSubmenu">
                <li className="sidebar-item-cursor">
                  <p href="#">Clothing Essentials</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Women's Care</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Men's Care</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Hair Color</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Oral Care</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Skin Care</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Handwash</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Tissue & Wipes</p>
                </li>
                <li className="sidebar-item-cursor">
                  <p href="#">Telcom Powder</p>
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
              <p href="#">Lights & Electrical</p>
            </li>
            <li className="sidebar-item-cursor">
              <p href="#">Tools & Hardware</p>
            </li>
            <li className="sidebar-item-cursor">
              <p href="#">Kitchen Appliances</p>
            </li>
            </ul>
          </Collapse>

        </li>
        <li className="sidebar-item-cursor">
          <p href="#"><i className="me-2 twa twa-lg twa-gear"></i> Vehicle Essensials</p>
        </li>
        </ul>
    </nav>
  );
}
export default Sidebar;