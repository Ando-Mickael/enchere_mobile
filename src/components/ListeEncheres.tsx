import { IonList } from "@ionic/react";
import { ListeEncheresProps } from "../util/Interface";
import { ItemEnchere } from "./ItemEnchere";

export const ListeEncheres: React.FC<ListeEncheresProps> = ({ encheres }) => {

    return (
        <IonList>
            {encheres.map((enchere: any) => {
                return (
                    <ItemEnchere enchere={enchere} key={enchere["id"]} />
                );
            })}
        </IonList>
    );
}