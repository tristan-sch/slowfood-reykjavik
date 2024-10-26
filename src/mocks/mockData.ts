import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YouTubeIcon,
} from '@/components/Icons/SocialIcons'

/* Menu Section */
export const mainMenuData = [
  {
    title: 'News',
    href: '/#blog',
  },
  {
    title: 'Presidia',
    href: '/#features',
  },

  {
    title: 'About us',
    href: '/#about',
  },
  {
    title: 'Guides',
    href: '/#guides',
  },
]

/* Features Section */
export const featuresTabs = [
  {
    name: 'Hen',
    href: 'https://www.fondazioneslowfood.com/en/slow-food-presidia/settlers-icelandic-hen/',
    features: [
      {
        name: 'Icelandic Settlers Hen',
        description:
          'The Icelandic hen arrival in Iceland probably dates back to the 10th century, when it was brought into the country by settlers from Ireland and Norway. Landnámshæna is a colourful, medium-sized bird, without beard or feathered feet. Often speckled, with collars or fringes, it is curious and independent, and has a strong maternal instinct.',
        imageSrc: '/hen.png',
        imageAlt: '',
      },
    ],
  },
  {
    name: 'Goat',
    href: 'https://www.fondazioneslowfood.com/en/slow-food-presidia/icelandic-goat/',
    features: [
      {
        name: 'Icelandic goat',
        description:
          'The Icelandic Goat is a rare, isolated breed of Nordic origin dating back to the Settlement of Iceland over 1,100 years ago. It is believed that the goats arrived with the settlers who came mainly from Norway around the year 874 A.D. and there is no evidence of goats being imported ever since. A large number of place names in all parts of the country indicate goat keeping. ',
        imageSrc: '/goat.png',
        imageAlt: '',
      },
    ],
  },
  {
    name: 'Skyr',
    href: 'https://www.fondazioneslowfood.com/en/slow-food-presidia/50588/',
    features: [
      {
        name: 'Icelandic Skyr',
        description:
          'Skyr, a fresh acid-set cheese made from cow’s milk, has ancient origins. It was already an integral part of the diet of Iceland’s first settlers over a thousand years ago, and Icelandic families have been making it at home since time immemorial. Skyr was once produced with both sheep’s and cow’s milk, but from the start of the 20th century cow’s milk began to used exclusively.  ',
        imageSrc: '/skyr.png',
        imageAlt: '',
      },
    ],
  },
]

/* Footer Section */
export const footerNavigation = {
  news: [
    { name: 'Our blog', href: '/blog' },
    { name: 'Newsletter', href: '/#form' },
  ],
  presidia: [
    { name: 'Icelandic Hen', href: '/#hen' },
    { name: 'Icelandic Goat', href: '/#goat' },
    { name: 'Icelandic Skyr', href: '/#skyr' },
  ],
  guides: [
    { name: 'Ark of taste Iceland', href: '/icelandic-products' },
    { name: 'Places and restaurant', href: '#' },
  ],
  about: [
    { name: 'What is Slow Food?', href: '#' },
    { name: 'Our actions', href: '#' },
    { name: 'Our team', href: '#' },
    { name: 'Slow Food Youth', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: FacebookIcon,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: InstagramIcon,
    },
    {
      name: 'X',
      href: '#',
      icon: XIcon,
    },
    {
      name: 'YouTube',
      href: '#',
      icon: YouTubeIcon,
    },
  ],
}

/* Team Section */
export const people = [
  {
    name: 'Dora',
    role: 'Chairwoman',
    imageUrl: '/dora.jpeg',
    xUrl: '#',
    linkedinUrl: '#',
    location: 'Reykjavik, Iceland',
  },
  {
    name: 'Lindsay Walton 1',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
    location: 'Reykjavik, Iceland',
  },
  {
    name: 'Lindsay Walton 2',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
    location: 'Reykjavik, Iceland',
  },
  {
    name: 'Lindsay Walton 3',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
    location: 'Reykjavik, Iceland',
  },
  {
    name: 'Lindsay Walton 4',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
    location: 'Reykjavik, Iceland',
  },
  {
    name: 'Tristan',
    role: 'Website',
    imageUrl: '/tristan.jpeg',
    xUrl: '#',
    linkedinUrl: '#',
    location: 'Reykjavik, Iceland',
  },
]

/* Icelandic Products Page */
export const products = [
  {
    title: 'Icelandic skyr',
    content:
      'One of the few produced from the first days of colonization of Iceland, made out of cow, sheep or goat milk.',
  },
  {
    title: 'Icelandic goat',
    content:
      'The oldest goat race in Europe, with only 890 animals left, the largest flocks being in Haafell (close to Reykholt in the west, welcome to visit) and in Möðrudalur in the east',
  },
  {
    title: 'Fermented shark ',
    content:
      'Which has for a long time been a co product of fisheries though it was in the 19th century and early 20th hunted by specialized ship, a dangerous fishing since many of the boats capsized and the whole crew disappeared',
  },
  {
    title: 'Salt',
    content:
      'Produced In a special way, heating the sea water by the geothermal energy (look for Saltverk salt) – a process used in the 19th century but abandoned when both imports of salt was increased and technical equipment had to be renewed',
  },
  {
    title: 'Sundried cod',
    content:
      'The so-called bacalao, which was traditionally dried on stone to get the best result and a white fish – on the verge of disappearing with the industrial process of salting and whiting the fish',
  },
  {
    title: 'Harðfiskur',
    content:
      'The dried fish which used to be dried on poles in the cold months (to avoid the flies), and is now too often dried in heated cabinet to accelerate the process.',
  },
  {
    title: 'Hangikjöt',
    content:
      'Which is traditionally salted and cold smoked with sheep dung, is not in danger of disappearing, as popular as it is on the Christmas table of Icelanders, but is in competition with industrialized production.',
  },
  {
    title: 'Lúra',
    content:
      'Which is a flatfish of the plaice family, caught only in the lagoon by Höfn in Hafnafjörður by small boats and walking people, then dried and used later boild or as a snack',
  },
  {
    title: 'Magáll',
    content:
      'Made out of the flank of lamb, boiled and smoked before being pressed and salted',
  },
  {
    title: 'Rúllupylsa',
    content:
      'Made as well from the lamb flank but rolled as a sausage and spiced or smoked',
  },
]

/* About Page */
export const stats = [
  { label: 'Business was founded', value: '2012' },
  { label: 'People on the team', value: '120+' },
  { label: 'Users on the platform', value: '250k' },
  { label: 'Paid out to creators', value: '$70M' },
]

export const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]
