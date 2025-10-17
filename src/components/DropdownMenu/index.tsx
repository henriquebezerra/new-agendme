import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FAB } from "react-native-paper"
import { styles } from "./style";
import style from "../Toast/ErrorToast/style";

const DropdownMenu = () => {
  
  const [fabOpen, setFabOpen] = useState(false);
  const { t } = useTranslation();

  const handleFabAction = (action: string) => {
    if (action === 'cadastrarEstabelecimento') {
      console.log('navegar para cadastrar estabelecimento');
    } else if (action === 'cadastrarServico') {
      console.log('navegar para cadastrar serviço');
    }
    setFabOpen(false);
  };

  return ( 
    <FAB.Group
      open={fabOpen}
      visible={true}
      icon={fabOpen ? 'close' : 'plus'}
      color="#FFFFFF"
      style={styles.mainFab}
      fabStyle={styles.fabStyle}
      backdropColor="rgba(255, 255, 255, 0.3)"
      onStateChange={({ open }) => setFabOpen(open)}
      actions={[
        { 
          icon: 'store',
          label: t('registerEstablishment'),
          onPress: () => handleFabAction('cadastrarEstabelecimento'),
          color: '#4EADBE',
          style: styles.optionMenuStyle,
          labelStyle: styles.labelStyle
        },
        {
          icon: 'content-cut',
          label: t('registerService'), 
          onPress: () => handleFabAction('cadastrarServico'),
          color: '#4EADBE',
          style: styles.optionMenuStyle,
          labelStyle: styles.labelStyle
        },
        {
          icon: '',
          label: '',
          onPress: () => {}
        }
      ]}
    />
  );
}

export default DropdownMenu;
