
import './App.css';
import Accordian from './components/accordian';
import ModalTest from './components/custom-modal/modal-test';
import TabTest from './components/custom-tabs/tab-test';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMore from './components/load-more-data';
import QRGenerator from './components/qrcode';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indictor';
import StarRating from './components/star-rating';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data'

function App() {
  return (
    <div className="App">
      <Accordian/>
      <RandomColor/>
      <StarRating noOfStars={10}/>
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={'10'} page={1}/> 
      <LoadMore/> 
       <TreeView menus={menus}/> 
       <QRGenerator/> 
       <LightDarkMode/>
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> 
       <TabTest/> 
      <ModalTest/>
        
    </div>
  );
}

export default App;
