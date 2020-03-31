import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Daniel's Ionic Project</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
	  	The world is your oyster.
		<p>
		  if you get lost, the {' '}
		  <a 
		    target="_blank"
			rel="nooper"
			href="https://ionicframework.com/docs">
			 docs </a> {' '}
			 will be your guide.
		</p>
			<IonFab vertical="bottom" horizontal="end" slot="fixed">
    			<IonFabButton>
					<IonIcon icon={add} />
    			</IonFabButton>
  			</IonFab>
        
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
