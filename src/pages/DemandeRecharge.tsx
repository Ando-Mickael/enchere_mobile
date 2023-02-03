import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { FormDemandeRecharge } from "../components/FormDemandeRecharge";

export const DemandeRecharge: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Demande de recharge</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <FormDemandeRecharge />
            </IonContent>
        </IonPage>
    );
}