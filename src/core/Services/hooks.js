import React from 'react';

const useHooks = () => {

    const Services = [
        {
            id: 1,
            title: 'Dental Consultation',
            description: 'The dental consultation is where your dentist will discuss your oral and overall health. They will review your dental x-rays and discuss their findings from the dental exam. If needed, your dentist will recommend treatments and answer any questions you may have.'
        },
        {
            id: 2,
            title: 'Cleaning / Oral Prophylaxis',
            description: `Oral Prophylaxis is a professional cleaning procedure performed at our office to get rid of plaque build-up that regular brushing and flossing can't reach.`
        },
        {
            id: 3,
            title: 'Tooth Restoration (Filling/Pasta)',
            description: 'Tooth restorations are the various ways your dentist can replace missing teeth or repair missing parts of the tooth structure.'
        },
        {
            id: 4,
            title: 'Fluoride Application',
            description: 'Fluoride varnish is a dental treatment that can help prevent tooth decay, slow it down, or stop it from getting worse.'
        },
        {
            id: 5,
            title: 'Sealant',
            description: 'Dental sealant is a thin, plastic coating painted on the chewing surfaces of teeth -- usually the back teeth (the premolars and molars) -- to prevent tooth decay. The sealant quickly bonds into the depressions and grooves of the teeth, forming a protective shield over the enamel of each tooth.'
        },
        {
            id: 6,
            title: 'Root Canal Treatment',
            description: 'Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.'
        },
        {
            id: 7,
            title: 'Bunot / Tooth Extraction',
            description: 'A tooth extraction is the permanent removal of a tooth from its socket and may be done manually using forceps or surgically.'
        },
        {
            id: 8,
            title: 'Wisdom Tooth Removal',
            description: 'Wisdom tooth extraction is a surgical procedure to remove one or more wisdom teeth — the four permanent adult teeth located at the back corners of your mouth on the top and bottom.'
        },
        {
            id: 9,
            title: 'Gum Contouring / Gingivectomy',
            description: 'Gum contouring is a cosmetic procedure that can change the shape of your gums. A dentist can use this procedure to cut away excessive gum tissue that is giving you a "gummy" smile or to restore gum tissue that has receded and is now exposing too much of your teeth.'
        },
        {
            id: 10,
            title: 'Dentures / Pustiso (Removable)',
            description: 'A denture is a removable replacement for missing teeth and surrounding tissues. Two types of dentures are available -- complete and partial dentures. ',
            subservices: [
                {sub: 'Complete Dentures'},
                {sub: 'Partial Dentures'}
            ]
        },
        {
            id: 11,
            title: 'Fixed Bridge',
            description: 'A dental bridge is a fixed (non-removable) appliance and is an excellent way to replace missing teeth.'
        },
        {
            id: 12,
            title: 'Porcelain Jacket Crown',
            description: 'A jacket crown is a full porcelain ceramic covered crown which is used to protect the entire surface of a tooth.'
        },
        {
            id: 13,
            title: 'Teeth Whitening',
            description: 'Teeth whitening is a simple process. Whitening products contain one of two tooth bleaches (hydrogen peroxide or carbamide peroxide).'
        },
        {
            id: 14,
            title: 'Veneers',
            description: `Veneers are thin coverings that are placed over the front (visible) part of the tooth. They look like natural teeth. Veneers can be used to correct a wide range of dental issues, such as: teeth that are stained and can't be whitened by bleaching. chipped or worn teeth`
        },
        {
            id: 15,
            title: 'Braces / Orthodontic Treatment',
            description: `Dental braces (also known as braces, orthodontic cases, or cases) are devices used in orthodontics that align and straighten teeth and help position them with regard to a person's bite, while also aiming to improve dental health.`,
            subservices: [
                {sub: 'Metal, Ceramic, Self-Ligating'}
            ]
        },
        {
            id: 16,
            title: 'Orthodontic Appliances',
            description: 'Orthodontic devices are used to correct malocclusion and include (but are not limited to) removable retainers and bruxism guards, as well as braces, brackets, and fixed retainers cemented onto the teeth.',
            subservices: [
                {sub: 'Rentainers, Expanders'}
            ]
        },
        {
            id: 17,
            title: 'Mouthguard',
            description: 'Mouthguards are devices used to protect your teeth from grinding or clenching while you sleep or from injuries while you play sports. They can also help to reduce snoring and relieve obstructive sleep apnea.'
        }
    ]

  return {
    Services
  };
};

export default useHooks;
