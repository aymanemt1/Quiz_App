// Material UI questions: 50 EN + 50 FR, 10 per level (1-5) per block.
// Covers: core components, sx prop, styled(), theming, Grid, breakpoints, icons, dark mode.
export const materialUiQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al 3la import dyal MUI: components kaynin f package mo3ayan, w styles w icons f packages khrin. Fker fin kayn l Button.",
        "text": "Which import gives you a Material UI button component?",
        "answers": [
          "import { Button } from 'react';",
          "import Button from '@mui/material/Button';",
          "import Button from '@mui/material/styles';",
          "import Button from '@mui/icons-material/Button';"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "Variants dyal Button tlata: text, outlined, contained. Fker chno kay3ni 'contained' — wach kay7tawi lon wla ghir border.",
        "text": "What does this render?",
        "code": "<Button variant='contained'>Save</Button>",
        "answers": [
          "A solid button filled with the primary color",
          "A button with only an outline border",
          "A plain text button with no background",
          "A disabled grey button"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "TextField 3ndha label w placeholder bjoj — fker chno kaydir label melli input khawya w melli kat-focusi 3liha.",
        "text": "What will the user see?",
        "code": "<TextField label='Email' variant='outlined' />",
        "answers": [
          "A floating label 'Email' that moves above the input when focused",
          "Nothing — label is not a valid TextField prop",
          "A placeholder text 'Email' inside the input",
          "A red error message saying 'Email'"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "Typography kat-jme3 joj 7wayj: style dyal variant w l element li kayt-rendera. Fker chno l default dyal variant h4.",
        "text": "What does this render?",
        "code": "<Typography variant='h4'>Welcome</Typography>",
        "answers": [
          "An <h4> element styled with the theme's h4 styles",
          "An <h1> element with h4 styling",
          "Plain unstyled text",
          "A <div> with h4 styling"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "sx spacing kayt7seb b factor dyal theme — default factor ch7al? Dreb p:2 f dak l factor.",
        "text": "How much padding does the Box get?",
        "code": "<Box sx={{ p: 2 }}>Hello</Box>",
        "answers": [
          "2px",
          "8px",
          "16px",
          "2rem"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "Stack hiya flexbox wrapper — direction kat7eded l me7war, w spacing kat7seb b nafs factor dyal theme.",
        "text": "How are the two buttons laid out?",
        "code": "<Stack direction='row' spacing={2}>\n  <Button>One</Button>\n  <Button>Two</Button>\n</Stack>",
        "answers": [
          "Horizontally, with a 16px gap between them",
          "Vertically, with a 16px gap between them",
          "Horizontally, with no gap",
          "Stacked on top of each other with no gap"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "AppBar hiya l container, walakin l content khaso ykon mrteb ldakhel — MUI 3ndha component khasa l had l gharad kat7et l padding w l alignment.",
        "text": "Which snippet is the correct way to build a top bar with a title?",
        "answers": [
          "<AppBar><h1>Shop</h1></AppBar>",
          "<AppBar position='static'><Toolbar><Typography variant='h6'>Shop</Typography></Toolbar></AppBar>",
          "<Toolbar><AppBar>Shop</AppBar></Toolbar>",
          "<AppBar><Button>Shop</Button></AppBar>"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "Icons dyal MUI kayt-importaw k components mn package dyal icons — fker chno smit l package w kifach katsta3mel l icon ldakhel button.",
        "text": "Which code correctly shows a menu icon button?",
        "answers": [
          "import MenuIcon from '@mui/icons-material/Menu'; then <IconButton><MenuIcon /></IconButton>",
          "<IconButton icon='menu' />",
          "<IconButton><Icon>menu</Icon></IconButton>",
          "<Button icon><Menu /></Button>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "CssBaseline kat-t7et f root dyal app — fker 3lach: browsers kaykhtalfo f default styles, w had component katwa7edhom.",
        "text": "What does <CssBaseline /> do when placed at the root of your app?",
        "answers": [
          "Applies a consistent CSS baseline: resets margins and normalizes styles across browsers",
          "Loads the Material UI font files",
          "Enables dark mode",
          "Adds a CSS grid overlay to the page"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "Container kat-centrer l content — maxWidth kat7eded l 7ed l a9sa dyal l3erd 7asab breakpoints dyal theme.",
        "text": "What does <Container maxWidth='md'> do?",
        "answers": [
          "Centers its children and caps the content width at the md breakpoint",
          "Makes the content exactly 900px wide on all screens",
          "Hides the content on screens smaller than md",
          "Adds a medium grey background"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "sx katfhem les couleurs dyal theme b notation pointée — fker chno kat3ni 'primary.main' f palette dyal theme.",
        "text": "What color is the text?",
        "code": "<Typography sx={{ color: 'primary.main' }}>Hello</Typography>",
        "answers": [
          "The theme's primary color",
          "Red",
          "The default body text color",
          "It throws an error — sx only accepts plain CSS colors"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "mt hiya shorthand dyal margin-top f system dyal MUI — w l number kayt-dreb f spacing factor, b7al p.",
        "text": "What CSS does sx={{ mt: 3 }} produce?",
        "answers": [
          "margin-top: 24px",
          "margin-top: 3px",
          "margin: 3px on all sides",
          "margin-top: 3rem"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "Dialog component controlled — hiya ma kat-beddelch rasha, ghir kat-tbe3 l prop li 3titiha. Fker chkon li khaso ybedel open.",
        "text": "The dialog never opens. What is wrong?",
        "code": "const [open, setOpen] = useState(false);\n<Dialog open={open}>\n  <DialogTitle>Hi</DialogTitle>\n</Dialog>",
        "answers": [
          "Nothing ever sets open to true — Dialog is controlled and only follows the open prop",
          "Dialog needs an onOpen prop to open",
          "DialogTitle must come after DialogContent",
          "Dialog only opens with variant='modal'"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "TextField 3ndha 3 variants rasmiyin — wa7ed fihom kaydir border kamel dayr b input, wa7ed background mlowan, w wa7ed ghir underline.",
        "text": "Which variant renders an input with a full rectangular border?",
        "answers": [
          "outlined",
          "filled",
          "standard",
          "bordered"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "color prop dyal Button kat-qbel les couleurs dyal palette — primary hiya default, walakin kayn secondary w d'autres.",
        "text": "What changes with <Button variant='contained' color='secondary'>?",
        "code": "<Button variant='contained' color='secondary'>Buy</Button>",
        "answers": [
          "The button uses the theme's secondary color instead of primary",
          "The button becomes smaller",
          "The button text becomes italic",
          "Nothing — secondary is not a valid color"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "Paper kat-methel l surfaces — elevation number mn 0 l 24, fker chno kaytzad melli kat-zid l number.",
        "text": "What does <Paper elevation={3}> control?",
        "answers": [
          "The depth of the shadow under the paper",
          "The z-index stacking order",
          "The border thickness in pixels",
          "The padding inside the paper"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "background.paper hiya couleur dyal theme kat-tbeddel 7asab l mode — light wla dark. Fker 3lach theme-aware a7san mn lon fixe.",
        "text": "In dark mode, what background does this Box get?",
        "code": "<Box sx={{ bgcolor: 'background.paper' }}>Hi</Box>",
        "answers": [
          "The theme's paper background for the current mode (dark grey in dark mode)",
          "Always white",
          "Always black",
          "Transparent"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "disabled prop kat-men3 l click — w MUI kat-beddel l style bach yban bli ma kaynch clickable.",
        "text": "What happens when you add disabled to a Button?",
        "code": "<Button disabled>Save</Button>",
        "answers": [
          "It becomes non-clickable and visually greyed out",
          "It disappears from the page",
          "It stays clickable but shows no ripple",
          "It throws a console warning"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "sx kat-qbel object dyal breakpoints — xs hiya sgher wa7da, md hiya 900px. Fker chno kat3ni 'none' f xs w 'block' f md.",
        "text": "On a phone (xs size), is the text visible?",
        "code": "<Typography sx={{ display: { xs: 'none', md: 'block' } }}>Hello</Typography>",
        "answers": [
          "No — it is hidden below the md breakpoint",
          "Yes — it shows on all screen sizes",
          "Only if the phone is in landscape",
          "It shows but with no styling"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "Typography kat-freq bin style (variant) w semantics (component) — tqdar t-renderi ay element b ay style. Fker chno kaydir component hna.",
        "text": "What HTML does this render?",
        "code": "<Typography variant='body1' component='h1'>Title</Typography>",
        "answers": [
          "An <h1> element styled like body text",
          "A <p> element styled like an h1",
          "An <h1> element styled like an h1",
          "It throws — component must match the variant"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "Brand color khasha tkon f blasa wa7da bach kolchi y-tbe3ha — theme howa l blasa. Fker chno khask tdir b theme bach y-wsel l components.",
        "text": "You want every primary button in the app to use your brand color #6a1b9a. What is the correct setup?",
        "answers": [
          "const theme = createTheme({ palette: { primary: { main: '#6a1b9a' } } }); then wrap the app in <ThemeProvider theme={theme}>",
          "Set sx={{ color: '#6a1b9a' }} on every Button",
          "Edit the styles inside node_modules/@mui/material",
          "Pass brand='#6a1b9a' to each Button"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "ThemeProviders ymkn y-tnestaw — fker chno kaytra l theme ldakhel: wach kay-tremplacer kamel wla kay-tmergea?",
        "text": "What happens with nested ThemeProviders?",
        "code": "<ThemeProvider theme={outerTheme}>\n  <ThemeProvider theme={innerTheme}>\n    <Button>Hi</Button>\n  </ThemeProvider>\n</ThemeProvider>",
        "answers": [
          "The Button uses innerTheme (merged over outerTheme)",
          "The Button uses outerTheme — nesting is ignored",
          "It throws: only one ThemeProvider is allowed",
          "The Button gets no theme at all"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "styled kat-qbel function kat-st9bel object fih theme — fker chno l signature s7i7a: wach l function kat-st9bel theme nichan wla object fih theme?",
        "text": "Which styled() definition correctly uses the theme's spacing?",
        "answers": [
          "const P = styled('p')(({ theme }) => ({ padding: theme.spacing(2) }));",
          "const P = styled('p')({ padding: theme.spacing(2) });",
          "const P = styled('p')((theme) => ({ padding: theme.spacing(2) }));",
          "const P = styled('p')({ padding: 'theme.spacing(2)' });"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "MUI 3ndha hook khasa bach t-wsel l theme mn ay component ldakhel provider — fker smit l hook w mnin kat-importiha.",
        "text": "Inside a component wrapped by ThemeProvider, how do you read the theme object?",
        "answers": [
          "const theme = useTheme(); imported from '@mui/material/styles'",
          "const theme = useMuiTheme();",
          "props.theme is injected automatically into every component",
          "window.muiTheme"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "breakpoints.up('md') kat3ni 'md w lfo9' — w md f default theme = 900px. Fker wach 1200 dakhla f had l range.",
        "text": "What does this return on a 1200px-wide screen?",
        "code": "const theme = useTheme();\nconst isDesktop = useMediaQuery(theme.breakpoints.up('md'));",
        "answers": [
          "true — 1200px is at or above the md breakpoint (900px)",
          "false — md means exactly 900px",
          "It throws — breakpoints need a string like '900px'",
          "undefined until the next render"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "Grid system 12 columns — xs kat-tbe9 3la sgher screens, md 3la kbar. Fker ch7al mn column kat-akhod A f mobile w f desktop.",
        "text": "How do these grid items behave?",
        "code": "<Grid container spacing={2}>\n  <Grid item xs={12} md={6}>A</Grid>\n  <Grid item xs={12} md={6}>B</Grid>\n</Grid>",
        "answers": [
          "Stacked full-width on mobile, side by side (half each) on md and up",
          "Always side by side",
          "Always stacked",
          "B overlaps A on mobile"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "TextField m-bniya mn slots — l native input 3ndo slot khaso. Fker chno smit l slot dyal l input l asli f v6.",
        "text": "In MUI v6, how do you set a placeholder on the native input inside a TextField?",
        "answers": [
          "<TextField slotProps={{ htmlInput: { placeholder: 'Search...' } }} />",
          "<TextField placeholder='Search...' />",
          "<TextField slotProps={{ root: { placeholder: 'Search...' } }} />",
          "<TextField inputProps={{ placeholder: 'Search...' }} /> — the v6 recommended way"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "Dark mode f MUI kat-t7eded f palette — fker fin bdabt: wach f palette.mode wla f blasa khra.",
        "text": "Which theme enables dark mode across all MUI components?",
        "answers": [
          "createTheme({ palette: { mode: 'dark' } })",
          "createTheme({ mode: 'dark' })",
          "createTheme({ palette: { dark: true } })",
          "<ThemeProvider mode='dark'>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "theme.spacing() kat-dreb l number f base spacing dyal theme — default base ch7al?",
        "text": "With the default theme, what string does theme.spacing(2) return?",
        "answers": [
          "'16px'",
          "'2px'",
          "'8px'",
          "2"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "Kol variant 3ndo default element mapping — body1 kat-renderi element semantique mo3ayan. Fker chno howa.",
        "text": "What HTML element does <Typography variant='body1'> render by default?",
        "answers": [
          "<p>",
          "<span>",
          "<div>",
          "<h1>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "Grid v2 (Grid2) bedlat l API: ma b9atch item prop — fker chno smit l prop l jdida li kat7eded l size.",
        "text": "In MUI v6 with Grid v2, which is correct for a half-width column on desktop?",
        "answers": [
          "import Grid from '@mui/material/Grid2'; <Grid size={{ xs: 12, md: 6 }}>",
          "import Grid from '@mui/material/Grid'; <Grid size={{ xs: 12, md: 6 }}>",
          "import Grid from '@mui/material/Grid2'; <Grid item xs={12} md={6}>",
          "import Grid from '@mui/material/Grid2'; <Grid cols={{ xs: 12, md: 6 }}>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "sx kat-qbel array dyal objects — fker chno kaytra melli joj objects kay-definaw nafs l property.",
        "text": "What is the final text color?",
        "code": "<Box sx={[{ color: 'red' }, { color: 'blue' }]}>Hi</Box>",
        "answers": [
          "blue — later entries in the sx array win",
          "red — the first entry wins",
          "It throws — sx does not accept arrays",
          "purple — the colors are merged"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "alpha() utility dyal MUI kat-zid transparency 3la lon — fker chno kat3ni 0.5.",
        "text": "What does this produce?",
        "code": "import { alpha } from '@mui/material/styles';\nconst c = alpha(theme.palette.primary.main, 0.5);",
        "answers": [
          "The primary color at 50% opacity",
          "A 50% darker primary color",
          "A 50% lighter primary color",
          "It throws — alpha only works inside sx"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "Custom props li kat-sta3melhom ghir l styling khashom ma y-wsloch l DOM — styled 3ndha option bach t-filteri les props. Fker chno smitha.",
        "text": "React warns 'React does not recognize the danger prop on a DOM element' for the code below. What fixes it?",
        "code": "const MyBtn = styled(Button)(({ danger }) => ({\n  backgroundColor: danger ? 'red' : 'grey',\n}));\n<MyBtn danger>Delete</MyBtn>",
        "answers": [
          "Add the styled option shouldForwardProp: (prop) => prop !== 'danger'",
          "Rename the prop to data-danger everywhere",
          "Remove the prop and hardcode the style",
          "Wrap the button in another component"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "theme.breakpoints.down('sm') kat-rja3 media query string — fker kifach kat-sta3melha k key f object dyal styles.",
        "text": "Which styled block hides the element on small screens?",
        "answers": [
          "styled('div')(({ theme }) => ({ [theme.breakpoints.down('sm')]: { display: 'none' } }))",
          "styled('div')({ '@media (sm)': { display: 'none' } })",
          "styled('div')(({ theme }) => ({ breakpoints: { down: 'sm', display: 'none' } }))",
          "styled('div')({ sm: { display: 'none' } })"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "Dialog 3ndo joj props l width: wa7da kat7eded l max, w wa7da kat-khelih y3emer dak l max. Fker chno homa bjoj.",
        "text": "You want a dialog that is wide on desktop but never wider than the small breakpoint. Which props?",
        "answers": [
          "<Dialog maxWidth='sm' fullWidth>",
          "<Dialog width='sm'>",
          "<Dialog maxWidth='sm'> without fullWidth",
          "<Dialog size='small'>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "Menu kat-positiona rasha 7asab element mo3ayan — fker chno l prop li kat-gol l Menu fin y-t7et, w wach kayna f had l code.",
        "text": "Why does the Menu appear at the top-left corner instead of under the button?",
        "code": "const [anchorEl, setAnchorEl] = useState(null);\n<Button onClick={(e) => setAnchorEl(e.currentTarget)}>Open</Button>\n<Menu open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>\n  <MenuItem>One</MenuItem>\n</Menu>",
        "answers": [
          "anchorEl was never passed to the Menu — it needs anchorEl={anchorEl} to position itself",
          "Menu always opens at the top-left of the page",
          "onClose must be placed on the Button instead",
          "MenuItem must be replaced with MenuList"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "Tabs component controlled b7al Dialog — hiya ma kat-beddelch rasha. Fker chno l props li khasha bach t-tbe3 l state.",
        "text": "The tabs render but clicking them does nothing. What is missing?",
        "code": "const [value, setValue] = useState(0);\n<Tabs>\n  <Tab label='One' />\n  <Tab label='Two' />\n</Tabs>",
        "answers": [
          "value={value} and onChange={(e, v) => setValue(v)} on Tabs — it is a controlled component",
          "Each Tab needs its own onClick handler",
          "Tabs needs variant='controlled'",
          "Tab labels must be unique keys"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "Drawer 3ndo 3 variants rasmiyin — wa7ed dayman bayn, wa7ed kay-dfe3 l content, w wa7ed kay-t7et fo9 l content w kay-tsed b backdrop.",
        "text": "For a mobile navigation drawer that slides over the content and closes when tapping outside, which variant?",
        "answers": [
          "temporary",
          "permanent",
          "persistent",
          "modal"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "Values f sx ymkn y-kono functions — fker chno kat-st9bel had l function k argument.",
        "text": "What does the function receive here?",
        "code": "<Box sx={{ bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#121212' : '#fff') }}>Hi</Box>",
        "answers": [
          "The theme object",
          "The component's props",
          "The previous bgcolor value",
          "The generated CSS class name"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "Theme fih section khasa bach t-overridei styles dyal ay component globally — fker chno smit l section w kifach kat-sthedf MuiButton.",
        "text": "You want EVERY button in the app to have square corners. Where do you configure this once?",
        "answers": [
          "In createTheme: components: { MuiButton: { styleOverrides: { root: { borderRadius: 0 } } } }",
          "In createTheme: palette: { button: { borderRadius: 0 } }",
          "By wrapping each Button in its own styled() component",
          "In the CssBaseline options"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "Typography variants kayt-configuraw f blasa wa7da f theme — fker chno smit l key li fih fontFamily w h1...h6.",
        "text": "Which theme option changes the font and size of all h1 headings at once?",
        "answers": [
          "createTheme({ typography: { fontFamily: 'Inter', h1: { fontSize: '3rem' } } })",
          "createTheme({ palette: { h1: { fontSize: '3rem' } } })",
          "createTheme({ components: { MuiH1: { fontSize: '3rem' } } })",
          "Typography does not read the theme"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "v6 khdama b CSS variables — theme.vars kat3tik references dyal variables machi values. Fker chno ghadi t-sta3mel bih f CSS 3adi.",
        "text": "In MUI v6 with CSS variables enabled, what does theme.vars.palette.primary.main give you?",
        "answers": [
          "A var(--mui-palette-primary-main) reference you can use in plain CSS",
          "The hex color string",
          "A React component",
          "It is undefined — vars only exist for spacing"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "Box 3ndha component prop bach t-beddel l element — styled kat-wrapi l component. Fker wach l wrapper kay-7afed 3la had l 9odra.",
        "text": "Does this keep working as expected?",
        "code": "const MyBox = styled(Box)({ border: '1px solid red' });\n<MyBox component='section'>Hi</MyBox>",
        "answers": [
          "Yes — styled preserves the component prop polymorphism of Box",
          "No — styled components can never change their element",
          "It renders but loses the red border",
          "It throws — component is not forwarded by styled"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "Grid dyal MUI m-bniya 3la flexbox machi CSS grid — l spacing kayt-implémente b technique mo3ayana b margin w padding. Fker chno hiya.",
        "text": "With <Grid container spacing={2}>, how is the 16px gap actually implemented?",
        "answers": [
          "The container gets a compensating negative margin and each item gets padding",
          "Each item gets margin: 16px",
          "The container gets padding: 16px",
          "With CSS grid gap: 16px on the container"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "Theme kat-khelik tzid variants custom l ay component — fker fin: f components.MuiButton.variants b props w style.",
        "text": "You want a <Button variant='dashed'> usable across the whole app. How do you register it in the theme?",
        "answers": [
          "components: { MuiButton: { variants: [{ props: { variant: 'dashed' }, style: { border: '2px dashed grey' } }] } }",
          "palette: { variants: { dashed: true } }",
          "It works automatically — any string is a valid variant",
          "typography: { variants: ['dashed'] }"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "styled() kat-cree component jdida — ila drtiha ldakhel l function component, chno kaytra kol render? Fker l cost.",
        "text": "Why should styled() components be defined outside the component body?",
        "answers": [
          "Defining them inside recreates the component and its classes on every render, hurting performance",
          "It is required — styled throws when called inside a component",
          "Defining them inside is fine and recommended",
          "It changes the visual output"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "Nested ThemeProvider ma kay-remplacich theme kamel — kay-dir merge. Fker chno kaytra l keys li ma t3erfoch f inner theme.",
        "text": "outerTheme sets palette.primary.main to red; the nested innerTheme sets only typography.fontFamily. What is the Button's primary color inside?",
        "answers": [
          "Red — nested themes deep-merge, so unspecified keys are inherited from the outer theme",
          "The default MUI blue — the inner theme replaces the outer one entirely",
          "It throws — conflicting themes are not allowed",
          "Black"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "sx kat-d3em nested selectors b syntax dyal '&' — fker chno l syntax s7i7a l pseudo-class hover.",
        "text": "Which sx adds a darker background on hover using the theme?",
        "answers": [
          "sx={{ '&:hover': { bgcolor: 'primary.dark' } }}",
          "sx={{ hover: { bgcolor: 'primary.dark' } }}",
          "sx={{ ':hover': { background: 'primary.dark' } }}",
          "sx cannot do hover — onMouseEnter is the only way"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "Server ma 3ndoch window — l match lwl khaso ykon consistent. MUI 3ndha option f useMediaQuery l had l mochkil. Fker chno smitha.",
        "text": "Your SSR app shows a hydration mismatch warning caused by useMediaQuery. Which option fixes it?",
        "answers": [
          "useMediaQuery(query, { noSsr: true })",
          "useMediaQuery(query, { ssr: true })",
          "Wrapping the call in useEffect only",
          "Replacing it with window.matchMedia directly"
        ],
        "correct": 0,
        "selection": null
      }
    ]
  },
  {
    "lang": "FR",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al 3la import dyal MUI: components kaynin f package mo3ayan, w styles w icons f packages khrin. Fker fin kayn l Button.",
        "text": "Quel import donne accès au composant bouton de Material UI ?",
        "answers": [
          "import { Button } from 'react';",
          "import Button from '@mui/material/Button';",
          "import Button from '@mui/material/styles';",
          "import Button from '@mui/icons-material/Button';"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "Variants dyal Button tlata: text, outlined, contained. Fker chno kay3ni 'contained' — wach kay7tawi lon wla ghir border.",
        "text": "Qu'est-ce que ce code affiche ?",
        "code": "<Button variant='contained'>Save</Button>",
        "answers": [
          "Un bouton plein rempli avec la couleur primaire",
          "Un bouton avec seulement une bordure",
          "Un bouton texte simple sans fond",
          "Un bouton gris désactivé"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "TextField 3ndha label w placeholder bjoj — fker chno kaydir label melli input khawya w melli kat-focusi 3liha.",
        "text": "Que verra l'utilisateur ?",
        "code": "<TextField label='Email' variant='outlined' />",
        "answers": [
          "Un label flottant « Email » qui remonte au focus",
          "Rien — label n'est pas une prop valide de TextField",
          "Un placeholder « Email » à l'intérieur du champ",
          "Un message d'erreur rouge disant « Email »"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "Typography kat-jme3 joj 7wayj: style dyal variant w l element li kayt-rendera. Fker chno l default dyal variant h4.",
        "text": "Qu'est-ce que ce code affiche ?",
        "code": "<Typography variant='h4'>Welcome</Typography>",
        "answers": [
          "Un élément <h4> stylé avec les styles h4 du thème",
          "Un élément <h1> avec le style h4",
          "Du texte simple sans style",
          "Une <div> avec le style h4"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "sx spacing kayt7seb b factor dyal theme — default factor ch7al? Dreb p:2 f dak l factor.",
        "text": "Quel padding le Box reçoit-il ?",
        "code": "<Box sx={{ p: 2 }}>Hello</Box>",
        "answers": [
          "2px",
          "8px",
          "16px",
          "2rem"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "Stack hiya flexbox wrapper — direction kat7eded l me7war, w spacing kat7seb b nafs factor dyal theme.",
        "text": "Comment les deux boutons sont-ils disposés ?",
        "code": "<Stack direction='row' spacing={2}>\n  <Button>One</Button>\n  <Button>Two</Button>\n</Stack>",
        "answers": [
          "Horizontalement, avec un écart de 16px entre eux",
          "Verticalement, avec un écart de 16px entre eux",
          "Horizontalement, sans écart",
          "Empilés l'un sur l'autre sans écart"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "AppBar hiya l container, walakin l content khaso ykon mrteb ldakhel — MUI 3ndha component khasa l had l gharad kat7et l padding w l alignment.",
        "text": "Quel extrait est la bonne façon de construire une barre supérieure avec un titre ?",
        "answers": [
          "<AppBar><h1>Shop</h1></AppBar>",
          "<AppBar position='static'><Toolbar><Typography variant='h6'>Shop</Typography></Toolbar></AppBar>",
          "<Toolbar><AppBar>Shop</AppBar></Toolbar>",
          "<AppBar><Button>Shop</Button></AppBar>"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "Icons dyal MUI kayt-importaw k components mn package dyal icons — fker chno smit l package w kifach katsta3mel l icon ldakhel button.",
        "text": "Quel code affiche correctement un bouton avec une icône menu ?",
        "answers": [
          "import MenuIcon from '@mui/icons-material/Menu'; puis <IconButton><MenuIcon /></IconButton>",
          "<IconButton icon='menu' />",
          "<IconButton><Icon>menu</Icon></IconButton>",
          "<Button icon><Menu /></Button>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "CssBaseline kat-t7et f root dyal app — fker 3lach: browsers kaykhtalfo f default styles, w had component katwa7edhom.",
        "text": "Que fait <CssBaseline /> placé à la racine de votre application ?",
        "answers": [
          "Applique une base CSS cohérente : réinitialise les marges et normalise les styles entre navigateurs",
          "Charge les fichiers de police de Material UI",
          "Active le mode sombre",
          "Ajoute une grille CSS à la page"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "Container kat-centrer l content — maxWidth kat7eded l 7ed l a9sa dyal l3erd 7asab breakpoints dyal theme.",
        "text": "Que fait <Container maxWidth='md'> ?",
        "answers": [
          "Centre ses enfants et limite la largeur du contenu au breakpoint md",
          "Rend le contenu large d'exactement 900px sur tous les écrans",
          "Cache le contenu sur les écrans plus petits que md",
          "Ajoute un fond gris moyen"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "sx katfhem les couleurs dyal theme b notation pointée — fker chno kat3ni 'primary.main' f palette dyal theme.",
        "text": "De quelle couleur est le texte ?",
        "code": "<Typography sx={{ color: 'primary.main' }}>Hello</Typography>",
        "answers": [
          "La couleur primaire du thème",
          "Rouge",
          "La couleur de texte par défaut",
          "Ça lève une erreur — sx n'accepte que des couleurs CSS simples"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "mt hiya shorthand dyal margin-top f system dyal MUI — w l number kayt-dreb f spacing factor, b7al p.",
        "text": "Quel CSS sx={{ mt: 3 }} produit-il ?",
        "answers": [
          "margin-top: 24px",
          "margin-top: 3px",
          "margin: 3px sur tous les côtés",
          "margin-top: 3rem"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "Dialog component controlled — hiya ma kat-beddelch rasha, ghir kat-tbe3 l prop li 3titiha. Fker chkon li khaso ybedel open.",
        "text": "Le dialogue ne s'ouvre jamais. Quel est le problème ?",
        "code": "const [open, setOpen] = useState(false);\n<Dialog open={open}>\n  <DialogTitle>Hi</DialogTitle>\n</Dialog>",
        "answers": [
          "Rien ne met open à true — Dialog est contrôlé et suit uniquement la prop open",
          "Dialog a besoin d'une prop onOpen pour s'ouvrir",
          "DialogTitle doit venir après DialogContent",
          "Dialog ne s'ouvre qu'avec variant='modal'"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "TextField 3ndha 3 variants rasmiyin — wa7ed fihom kaydir border kamel dayr b input, wa7ed background mlowan, w wa7ed ghir underline.",
        "text": "Quelle variante affiche un champ avec une bordure rectangulaire complète ?",
        "answers": [
          "outlined",
          "filled",
          "standard",
          "bordered"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "color prop dyal Button kat-qbel les couleurs dyal palette — primary hiya default, walakin kayn secondary w d'autres.",
        "text": "Que change <Button variant='contained' color='secondary'> ?",
        "code": "<Button variant='contained' color='secondary'>Buy</Button>",
        "answers": [
          "Le bouton utilise la couleur secondaire du thème au lieu de la primaire",
          "Le bouton devient plus petit",
          "Le texte du bouton devient italique",
          "Rien — secondary n'est pas une couleur valide"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "Paper kat-methel l surfaces — elevation number mn 0 l 24, fker chno kaytzad melli kat-zid l number.",
        "text": "Que contrôle <Paper elevation={3}> ?",
        "answers": [
          "La profondeur de l'ombre sous le papier",
          "L'ordre d'empilement z-index",
          "L'épaisseur de la bordure en pixels",
          "Le padding à l'intérieur du papier"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "background.paper hiya couleur dyal theme kat-tbeddel 7asab l mode — light wla dark. Fker 3lach theme-aware a7san mn lon fixe.",
        "text": "En mode sombre, quel fond ce Box reçoit-il ?",
        "code": "<Box sx={{ bgcolor: 'background.paper' }}>Hi</Box>",
        "answers": [
          "Le fond papier du thème pour le mode courant (gris foncé en mode sombre)",
          "Toujours blanc",
          "Toujours noir",
          "Transparent"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "disabled prop kat-men3 l click — w MUI kat-beddel l style bach yban bli ma kaynch clickable.",
        "text": "Que se passe-t-il quand on ajoute disabled à un Button ?",
        "code": "<Button disabled>Save</Button>",
        "answers": [
          "Il devient non cliquable et visuellement grisé",
          "Il disparaît de la page",
          "Il reste cliquable mais sans effet ripple",
          "Ça lève un avertissement dans la console"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "sx kat-qbel object dyal breakpoints — xs hiya sgher wa7da, md hiya 900px. Fker chno kat3ni 'none' f xs w 'block' f md.",
        "text": "Sur un téléphone (taille xs), le texte est-il visible ?",
        "code": "<Typography sx={{ display: { xs: 'none', md: 'block' } }}>Hello</Typography>",
        "answers": [
          "Non — il est caché en dessous du breakpoint md",
          "Oui — il s'affiche sur toutes les tailles d'écran",
          "Seulement si le téléphone est en paysage",
          "Il s'affiche mais sans style"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "Typography kat-freq bin style (variant) w semantics (component) — tqdar t-renderi ay element b ay style. Fker chno kaydir component hna.",
        "text": "Quel HTML ce code produit-il ?",
        "code": "<Typography variant='body1' component='h1'>Title</Typography>",
        "answers": [
          "Un élément <h1> stylé comme du texte courant",
          "Un élément <p> stylé comme un h1",
          "Un élément <h1> stylé comme un h1",
          "Ça lève une erreur — component doit correspondre au variant"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "Brand color khasha tkon f blasa wa7da bach kolchi y-tbe3ha — theme howa l blasa. Fker chno khask tdir b theme bach y-wsel l components.",
        "text": "Vous voulez que tous les boutons primaires de l'application utilisent votre couleur de marque #6a1b9a. Quelle est la bonne configuration ?",
        "answers": [
          "const theme = createTheme({ palette: { primary: { main: '#6a1b9a' } } }); puis envelopper l'app dans <ThemeProvider theme={theme}>",
          "Mettre sx={{ color: '#6a1b9a' }} sur chaque Button",
          "Modifier les styles dans node_modules/@mui/material",
          "Passer brand='#6a1b9a' à chaque Button"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "ThemeProviders ymkn y-tnestaw — fker chno kaytra l theme ldakhel: wach kay-tremplacer kamel wla kay-tmergea?",
        "text": "Que se passe-t-il avec des ThemeProviders imbriqués ?",
        "code": "<ThemeProvider theme={outerTheme}>\n  <ThemeProvider theme={innerTheme}>\n    <Button>Hi</Button>\n  </ThemeProvider>\n</ThemeProvider>",
        "answers": [
          "Le Button utilise innerTheme (fusionné par-dessus outerTheme)",
          "Le Button utilise outerTheme — l'imbrication est ignorée",
          "Ça lève une erreur : un seul ThemeProvider est autorisé",
          "Le Button ne reçoit aucun thème"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "styled kat-qbel function kat-st9bel object fih theme — fker chno l signature s7i7a: wach l function kat-st9bel theme nichan wla object fih theme?",
        "text": "Quelle définition styled() utilise correctement l'espacement du thème ?",
        "answers": [
          "const P = styled('p')(({ theme }) => ({ padding: theme.spacing(2) }));",
          "const P = styled('p')({ padding: theme.spacing(2) });",
          "const P = styled('p')((theme) => ({ padding: theme.spacing(2) }));",
          "const P = styled('p')({ padding: 'theme.spacing(2)' });"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "MUI 3ndha hook khasa bach t-wsel l theme mn ay component ldakhel provider — fker smit l hook w mnin kat-importiha.",
        "text": "Dans un composant enveloppé par ThemeProvider, comment lire l'objet thème ?",
        "answers": [
          "const theme = useTheme(); importé depuis '@mui/material/styles'",
          "const theme = useMuiTheme();",
          "props.theme est injecté automatiquement dans chaque composant",
          "window.muiTheme"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "breakpoints.up('md') kat3ni 'md w lfo9' — w md f default theme = 900px. Fker wach 1200 dakhla f had l range.",
        "text": "Que retourne ce code sur un écran large de 1200px ?",
        "code": "const theme = useTheme();\nconst isDesktop = useMediaQuery(theme.breakpoints.up('md'));",
        "answers": [
          "true — 1200px est au niveau ou au-dessus du breakpoint md (900px)",
          "false — md signifie exactement 900px",
          "Ça lève une erreur — les breakpoints exigent une chaîne comme '900px'",
          "undefined jusqu'au prochain rendu"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "Grid system 12 columns — xs kat-tbe9 3la sgher screens, md 3la kbar. Fker ch7al mn column kat-akhod A f mobile w f desktop.",
        "text": "Comment ces éléments de grille se comportent-ils ?",
        "code": "<Grid container spacing={2}>\n  <Grid item xs={12} md={6}>A</Grid>\n  <Grid item xs={12} md={6}>B</Grid>\n</Grid>",
        "answers": [
          "Empilés pleine largeur sur mobile, côte à côte (moitié chacun) à partir de md",
          "Toujours côte à côte",
          "Toujours empilés",
          "B chevauche A sur mobile"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "TextField m-bniya mn slots — l native input 3ndo slot khaso. Fker chno smit l slot dyal l input l asli f v6.",
        "text": "En MUI v6, comment définir un placeholder sur l'input natif à l'intérieur d'un TextField ?",
        "answers": [
          "<TextField slotProps={{ htmlInput: { placeholder: 'Search...' } }} />",
          "<TextField placeholder='Search...' />",
          "<TextField slotProps={{ root: { placeholder: 'Search...' } }} />",
          "<TextField inputProps={{ placeholder: 'Search...' }} /> — la méthode recommandée en v6"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "Dark mode f MUI kat-t7eded f palette — fker fin bdabt: wach f palette.mode wla f blasa khra.",
        "text": "Quel thème active le mode sombre pour tous les composants MUI ?",
        "answers": [
          "createTheme({ palette: { mode: 'dark' } })",
          "createTheme({ mode: 'dark' })",
          "createTheme({ palette: { dark: true } })",
          "<ThemeProvider mode='dark'>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "theme.spacing() kat-dreb l number f base spacing dyal theme — default base ch7al?",
        "text": "Avec le thème par défaut, quelle chaîne theme.spacing(2) retourne-t-il ?",
        "answers": [
          "'16px'",
          "'2px'",
          "'8px'",
          "2"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "Kol variant 3ndo default element mapping — body1 kat-renderi element semantique mo3ayan. Fker chno howa.",
        "text": "Quel élément HTML <Typography variant='body1'> affiche-t-il par défaut ?",
        "answers": [
          "<p>",
          "<span>",
          "<div>",
          "<h1>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "Grid v2 (Grid2) bedlat l API: ma b9atch item prop — fker chno smit l prop l jdida li kat7eded l size.",
        "text": "En MUI v6 avec Grid v2, quelle syntaxe est correcte pour une colonne à mi-largeur sur desktop ?",
        "answers": [
          "import Grid from '@mui/material/Grid2'; <Grid size={{ xs: 12, md: 6 }}>",
          "import Grid from '@mui/material/Grid'; <Grid size={{ xs: 12, md: 6 }}>",
          "import Grid from '@mui/material/Grid2'; <Grid item xs={12} md={6}>",
          "import Grid from '@mui/material/Grid2'; <Grid cols={{ xs: 12, md: 6 }}>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "sx kat-qbel array dyal objects — fker chno kaytra melli joj objects kay-definaw nafs l property.",
        "text": "Quelle est la couleur finale du texte ?",
        "code": "<Box sx={[{ color: 'red' }, { color: 'blue' }]}>Hi</Box>",
        "answers": [
          "blue — les dernières entrées du tableau sx gagnent",
          "red — la première entrée gagne",
          "Ça lève une erreur — sx n'accepte pas les tableaux",
          "purple — les couleurs sont fusionnées"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "alpha() utility dyal MUI kat-zid transparency 3la lon — fker chno kat3ni 0.5.",
        "text": "Que produit ce code ?",
        "code": "import { alpha } from '@mui/material/styles';\nconst c = alpha(theme.palette.primary.main, 0.5);",
        "answers": [
          "La couleur primaire à 50 % d'opacité",
          "Une couleur primaire 50 % plus foncée",
          "Une couleur primaire 50 % plus claire",
          "Ça lève une erreur — alpha ne fonctionne que dans sx"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "Custom props li kat-sta3melhom ghir l styling khashom ma y-wsloch l DOM — styled 3ndha option bach t-filteri les props. Fker chno smitha.",
        "text": "React affiche « React does not recognize the danger prop on a DOM element » pour ce code. Que faire ?",
        "code": "const MyBtn = styled(Button)(({ danger }) => ({\n  backgroundColor: danger ? 'red' : 'grey',\n}));\n<MyBtn danger>Delete</MyBtn>",
        "answers": [
          "Ajouter l'option styled shouldForwardProp: (prop) => prop !== 'danger'",
          "Renommer la prop en data-danger partout",
          "Supprimer la prop et coder le style en dur",
          "Envelopper le bouton dans un autre composant"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "theme.breakpoints.down('sm') kat-rja3 media query string — fker kifach kat-sta3melha k key f object dyal styles.",
        "text": "Quel bloc styled cache l'élément sur les petits écrans ?",
        "answers": [
          "styled('div')(({ theme }) => ({ [theme.breakpoints.down('sm')]: { display: 'none' } }))",
          "styled('div')({ '@media (sm)': { display: 'none' } })",
          "styled('div')(({ theme }) => ({ breakpoints: { down: 'sm', display: 'none' } }))",
          "styled('div')({ sm: { display: 'none' } })"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "Dialog 3ndo joj props l width: wa7da kat7eded l max, w wa7da kat-khelih y3emer dak l max. Fker chno homa bjoj.",
        "text": "Vous voulez un dialogue large sur desktop mais jamais plus large que le breakpoint small. Quelles props ?",
        "answers": [
          "<Dialog maxWidth='sm' fullWidth>",
          "<Dialog width='sm'>",
          "<Dialog maxWidth='sm'> sans fullWidth",
          "<Dialog size='small'>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "Menu kat-positiona rasha 7asab element mo3ayan — fker chno l prop li kat-gol l Menu fin y-t7et, w wach kayna f had l code.",
        "text": "Pourquoi le Menu apparaît-il en haut à gauche au lieu de sous le bouton ?",
        "code": "const [anchorEl, setAnchorEl] = useState(null);\n<Button onClick={(e) => setAnchorEl(e.currentTarget)}>Open</Button>\n<Menu open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>\n  <MenuItem>One</MenuItem>\n</Menu>",
        "answers": [
          "anchorEl n'a jamais été passé au Menu — il faut anchorEl={anchorEl} pour le positionner",
          "Menu s'ouvre toujours en haut à gauche de la page",
          "onClose doit être placé sur le Button",
          "MenuItem doit être remplacé par MenuList"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "Tabs component controlled b7al Dialog — hiya ma kat-beddelch rasha. Fker chno l props li khasha bach t-tbe3 l state.",
        "text": "Les onglets s'affichent mais cliquer dessus ne fait rien. Que manque-t-il ?",
        "code": "const [value, setValue] = useState(0);\n<Tabs>\n  <Tab label='One' />\n  <Tab label='Two' />\n</Tabs>",
        "answers": [
          "value={value} et onChange={(e, v) => setValue(v)} sur Tabs — c'est un composant contrôlé",
          "Chaque Tab a besoin de son propre gestionnaire onClick",
          "Tabs a besoin de variant='controlled'",
          "Les labels des Tab doivent être des clés uniques"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "Drawer 3ndo 3 variants rasmiyin — wa7ed dayman bayn, wa7ed kay-dfe3 l content, w wa7ed kay-t7et fo9 l content w kay-tsed b backdrop.",
        "text": "Pour un tiroir de navigation mobile qui glisse par-dessus le contenu et se ferme au toucher extérieur, quelle variante ?",
        "answers": [
          "temporary",
          "permanent",
          "persistent",
          "modal"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "Values f sx ymkn y-kono functions — fker chno kat-st9bel had l function k argument.",
        "text": "Que reçoit la fonction ici ?",
        "code": "<Box sx={{ bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#121212' : '#fff') }}>Hi</Box>",
        "answers": [
          "L'objet thème",
          "Les props du composant",
          "La valeur précédente de bgcolor",
          "Le nom de classe CSS généré"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "Theme fih section khasa bach t-overridei styles dyal ay component globally — fker chno smit l section w kifach kat-sthedf MuiButton.",
        "text": "Vous voulez que TOUS les boutons de l'application aient des coins carrés. Où configurer cela une seule fois ?",
        "answers": [
          "Dans createTheme : components: { MuiButton: { styleOverrides: { root: { borderRadius: 0 } } } }",
          "Dans createTheme : palette: { button: { borderRadius: 0 } }",
          "En enveloppant chaque Button dans son propre composant styled()",
          "Dans les options de CssBaseline"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "Typography variants kayt-configuraw f blasa wa7da f theme — fker chno smit l key li fih fontFamily w h1...h6.",
        "text": "Quelle option de thème change la police et la taille de tous les titres h1 d'un coup ?",
        "answers": [
          "createTheme({ typography: { fontFamily: 'Inter', h1: { fontSize: '3rem' } } })",
          "createTheme({ palette: { h1: { fontSize: '3rem' } } })",
          "createTheme({ components: { MuiH1: { fontSize: '3rem' } } })",
          "Typography ne lit pas le thème"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "v6 khdama b CSS variables — theme.vars kat3tik references dyal variables machi values. Fker chno ghadi t-sta3mel bih f CSS 3adi.",
        "text": "En MUI v6 avec les variables CSS activées, que donne theme.vars.palette.primary.main ?",
        "answers": [
          "Une référence var(--mui-palette-primary-main) utilisable dans du CSS simple",
          "La chaîne de couleur hexadécimale",
          "Un composant React",
          "C'est undefined — vars n'existe que pour l'espacement"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "Box 3ndha component prop bach t-beddel l element — styled kat-wrapi l component. Fker wach l wrapper kay-7afed 3la had l 9odra.",
        "text": "Est-ce que cela continue de fonctionner comme prévu ?",
        "code": "const MyBox = styled(Box)({ border: '1px solid red' });\n<MyBox component='section'>Hi</MyBox>",
        "answers": [
          "Oui — styled préserve le polymorphisme de la prop component de Box",
          "Non — les composants styled ne peuvent jamais changer d'élément",
          "Ça s'affiche mais perd la bordure rouge",
          "Ça lève une erreur — component n'est pas transmis par styled"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "Grid dyal MUI m-bniya 3la flexbox machi CSS grid — l spacing kayt-implémente b technique mo3ayana b margin w padding. Fker chno hiya.",
        "text": "Avec <Grid container spacing={2}>, comment l'écart de 16px est-il réellement implémenté ?",
        "answers": [
          "Le conteneur reçoit une marge négative compensatrice et chaque élément reçoit du padding",
          "Chaque élément reçoit margin: 16px",
          "Le conteneur reçoit padding: 16px",
          "Avec CSS grid gap: 16px sur le conteneur"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "Theme kat-khelik tzid variants custom l ay component — fker fin: f components.MuiButton.variants b props w style.",
        "text": "Vous voulez un <Button variant='dashed'> utilisable dans toute l'application. Comment l'enregistrer dans le thème ?",
        "answers": [
          "components: { MuiButton: { variants: [{ props: { variant: 'dashed' }, style: { border: '2px dashed grey' } }] } }",
          "palette: { variants: { dashed: true } }",
          "Ça marche automatiquement — toute chaîne est une variante valide",
          "typography: { variants: ['dashed'] }"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "styled() kat-cree component jdida — ila drtiha ldakhel l function component, chno kaytra kol render? Fker l cost.",
        "text": "Pourquoi les composants styled() doivent-ils être définis en dehors du corps du composant ?",
        "answers": [
          "Les définir à l'intérieur recrée le composant et ses classes à chaque rendu, ce qui nuit aux performances",
          "C'est obligatoire — styled lève une erreur à l'intérieur d'un composant",
          "Les définir à l'intérieur est correct et recommandé",
          "Ça change le rendu visuel"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "Nested ThemeProvider ma kay-remplacich theme kamel — kay-dir merge. Fker chno kaytra l keys li ma t3erfoch f inner theme.",
        "text": "outerTheme définit palette.primary.main en rouge ; le innerTheme imbriqué ne définit que typography.fontFamily. Quelle est la couleur primaire du Button à l'intérieur ?",
        "answers": [
          "Rouge — les thèmes imbriqués fusionnent en profondeur, les clés non définies sont héritées du thème extérieur",
          "Le bleu par défaut de MUI — le thème intérieur remplace entièrement l'extérieur",
          "Ça lève une erreur — les thèmes en conflit sont interdits",
          "Noir"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "sx kat-d3em nested selectors b syntax dyal '&' — fker chno l syntax s7i7a l pseudo-class hover.",
        "text": "Quel sx ajoute un fond plus sombre au survol en utilisant le thème ?",
        "answers": [
          "sx={{ '&:hover': { bgcolor: 'primary.dark' } }}",
          "sx={{ hover: { bgcolor: 'primary.dark' } }}",
          "sx={{ ':hover': { background: 'primary.dark' } }}",
          "sx ne peut pas faire de hover — onMouseEnter est la seule solution"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "Server ma 3ndoch window — l match lwl khaso ykon consistent. MUI 3ndha option f useMediaQuery l had l mochkil. Fker chno smitha.",
        "text": "Votre application SSR affiche un avertissement d'hydratation causé par useMediaQuery. Quelle option corrige cela ?",
        "answers": [
          "useMediaQuery(query, { noSsr: true })",
          "useMediaQuery(query, { ssr: true })",
          "Envelopper l'appel dans useEffect uniquement",
          "Le remplacer par window.matchMedia directement"
        ],
        "correct": 0,
        "selection": null
      }
    ]
  }
];
