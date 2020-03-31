import React from 'react';
import faker from 'faker';
import _ from 'lodash';
import {Accordion} from 'semantic-ui-react';
import {Helmet} from 'react-helmet'

const panel3Image1 = "https://i.imgur.com/KMLRIsa.png"
const panel5Image1 = "https://i.imgur.com/laRG8xf.png"

const panel1Content = (
    <div>
        The Agri Virtual Assistant was created to provide farmers with the information
        they need to meet the challenges of operating a farm. It provides you with updates
        on the weather, informational videos on a variety of farming topics, and the ability
        to search for pests that are afflicting your crops by searchword or pictures.
    </div>
)

const panel2Content = (
    <div>
        To use the 'Check The Weather' feature, first click on 'Check The Weather' located
        at the top of the page in the navigation bar.Check The Weather provides you with 
        a 7-day forecast to keep track of rain and storms that could affect your crops. 
        Simply click in the city textbox, type in the name of the city you live in and repeat 
        with the state for the state textbox then click on the 'Show Weather' button. 
        A 7-day forecast should appear for your area.
    </div>
)

const panel3Content = (
    <div>
        To use the 'Watch Videos' feature, first click on 'Videos' located at the top of the page
        in the navigation bar. A drop down menu should appear with three categories named
        'Preservation', 'Productivity', and 'AG Technique'
        <div>
            <img src={panel3Image1} alt="Drop down menu for Videos" width="550" />
        </div>
        Click on one of the categories and a page should with a video carousel that contains
        youtube videos in the category you selected.
        Click on the left and right navigation arrows to scroll through images in that category.
        Once you see a video that you would like to watch, click on the youtube play button 
        located in the middle of the page.
    </div>
)

const panel4Content = (
    <div>
        To use the 'Search Pests by Keyword' feature, first click on 'Search Pests' located at 
        the top of the page in the navigation bar. This should take you to a page with a search 
        bar located at the top of the page. Simply type a keyword into the search bar and click 
        on the button with a magnifying class icon. This keyword can be the name of a pest, or
        a keyword in a symptom of a pest. Any matches will appear in a table format below the 
        search bar. Matches will include the name of a pest, the symptoms of a pest, and the 
        solutions to a pest. All of the text that appears in this table is searchable by keyword.
    </div>
)

const panel5Content = (
    <div>
        To use the 'Search Pests by Photo' feature, first click on 'Pest Photos' located at the 
        top of the page in the navigation bar. This should take you to a page with numerous photos 
        arranged in a grid. Scroll through the photos to locate the pest that you think is afflicting 
        your crops. Click on that photo to display the name of the pest.
        <div>
            <img src={panel5Image1} alt="Example of photo w/ name of pest" width="550" />
        </div>
    </div>
)

  const panels = [
      {
        key: `panel-1`,
        title: 'Agri Virtual Assistant Mission Statement',
        content: {content: panel1Content}
      },
      {
        key: `panel-2`,
        title: 'Check The Weather',
        content: {content: panel2Content}
      },
      {
        key: `panel-3`,
        title: 'Watch Videos',
        content: {content: panel3Content}
      },
      {
        key: 'panel-4',
        title: 'Search Pests By Keyword',
        content: {content: panel4Content}
      },
      {
          key: 'panel-5',
          title: 'Search Pests By Photo',
          content: {content: panel5Content}
      }
  ]
  
  const AccordionExampleNested = () => (
    <div>
        <table align="center">
        <Helmet>
            <style>{'body {background-color: #bbdefb; }'}</style>
        </Helmet>
        <Accordion defaultActiveIndex={0} panels={panels} styled />
        </table>
    </div>
  )
export default AccordionExampleNested;