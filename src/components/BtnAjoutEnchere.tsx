import { IonFab, IonFabButton, IonIcon, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent } from "@ionic/react";
import { add, close } from "ionicons/icons";
import { useState } from "react";
import { FormAjoutEnchere } from "./FormAjoutEnchere";

export const BtnAjoutEnchere: React.FC = () => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <IonFabButton onClick={() => setOpenModal(true)}>
                    <IonIcon icon={add}></IonIcon>
                </IonFabButton>
            </IonFab>
            <IonModal
                isOpen={openModal}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Ajouter une enchere</IonTitle>
                        <IonButtons slot="end">
                            <IonButton
                                onClick={() => setOpenModal(false)}>
                                <IonIcon icon={close} />
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <FormAjoutEnchere />
                </IonContent>
            </IonModal>
        </>
    );
}