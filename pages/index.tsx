import { Box, createTheme, CssBaseline, IconButton, Paper } from '@mui/material'
import { Container, ThemeProvider } from '@mui/system'
import type { NextPage } from 'next'
import { LinkData } from './api/link'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { useEffect, useState } from 'react'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const Home: NextPage = () => {
  const [data, setData] = useState<LinkData>()

  useEffect(() => {
    ;(async () => {
      setData(await (await fetch('/api/link')).json())
    })()
  }, [])

  const onCopyClick = () => {
    if (data) {
      navigator.clipboard.writeText(data.shortUrl)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Paper
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 1,
            p: 2,
          }}
        >
          <Box
            component="code"
            sx={{
              fontSize: 20,
              flexGrow: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {data?.shortUrl || 'Loading...'}
          </Box>
          <IconButton aria-label="copy" onClick={onCopyClick}>
            <ContentCopyIcon fontSize="inherit" />
          </IconButton>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}

export default Home
