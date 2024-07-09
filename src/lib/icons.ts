interface Icon {
  path: string;
}

interface Icons {
  [key: string]: Icon;
}

const icons: Icons = {
  "arrow-right": {
    path: `
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 12l14 0" />
      <path d="M13 18l6 -6" />
      <path d="M13 6l6 6" />
    `
  },
  menu: {
    path: `
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    `
  },
  "external-link": {
    path: `
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
      <path d="M11 13l9 -9" />
      <path d="M15 4h5v5" />
    `
  }
};

const getIcon = (key: string): Icon => {
  return icons[key];
};

export default getIcon;
