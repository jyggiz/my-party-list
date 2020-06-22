if ("contacts" in navigator) {

  if ("select" in navigator.contacts) {
    
    const contacts = await navigator
    .contacts
    .select(
      ['name', 'tel'],
      {multiple: true}
      );

    if (!contacts.length) {
      return;
    }

    for (let i = 0; i < contacts.length; i++) {
    
      console.log();
    
    }

  } else {
    console.log('Select is not supported!');
  }

} else {
  console.log('Contacts Picker API not supported!');
}