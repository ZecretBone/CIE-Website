
import { Typography } from "@mui/material";
import Faqlist from './Component/Faqlist'
import Button from '@mui/material/Button';

export default function Faq() {
  return (
    <div>
      <Faqlist>

      </Faqlist>
      <Typography>Can't find what you are looking for?
        <Button>
            Contact Us
        </Button>
      </Typography>
    </div>
  );
}