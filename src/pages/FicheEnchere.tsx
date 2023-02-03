import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export const FicheEnchere: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Fiche</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                fiche enchere
            </IonContent>
        </IonPage>
    );
}