import { IonButton } from "@ionic/react";
import { useHistory } from "react-router";

export const BtnDeconnexion: React.FC = () => {
    
    const history = useHistory();

    function deconnexion() {
        localStorage.removeItem("utilisateur");
        history.push("/connexion");
    }
    
    return (
        <IonButton
            onClick={() => deconnexion()}>
            Se deconnecter
        </IonButton>
    );
}