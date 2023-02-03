import { IonButton, IonContent, IonHeader, IonPage } from "@ionic/react";
import { useHistory } from "react-router";
import "../theme/styles.css";

export const Connexion: React.FC = () => {

    const history = useHistory();

    return (
        <IonPage id="main-content">
            <IonHeader></IonHeader>
            <IonContent className="ion-padding">
                <div className="flex-container">
                    <h2>Rejoingnez-nous !</h2>
                    <div className="group-btn">
                        <IonButton
                            expand="block"
                            onClick={() => history.push("/inscription")}>Inscription</IonButton>
                        <IonButton
                            expand="block"
                            fill="outline"
                            onClick={() => history.push("/login")}>Se connecter</IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}