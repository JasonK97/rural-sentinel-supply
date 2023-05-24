import Image from 'next/image'

function HardGoodsPage() {
  return (
    <>
      <div className="max-w-xl mx-auto prose prose-blue">
        <h2>Field Journals</h2>
        <ul>
          <li><a href='https://www.amazon.com/dp/B0C2RSC422' target='_blank' rel="noreferrer">Field Journal No. 004 - Olive Drab</a></li>
          <li><a href='https://www.amazon.com/dp/B0C2RVJL1G' target='_blank' rel="noreferrer">Field Journal No. 010 - Topographical Olive Drab</a></li>
          <li><a href='https://www.amazon.com/dp/B0C47JCYVD' target='_blank' rel="noreferrer">Field Journal No. 011 - Topographical Coyote</a></li>
          <li><a href='https://www.amazon.com/dp/B0C47YQY5R' target='_blank' rel="noreferrer">Field Journal No. 012 - Topographical Navy</a></li>
          <li><a href='https://www.amazon.com/dp/B0C47LSDHW' target='_blank' rel="noreferrer">Field Journal No. 013 - Topographical Midnight</a></li>
        </ul>
      </div>
      <div className="flex justify-around m-8">
        <Image 
          src='/journals/field-journal-plate-carrier.jpeg'
          alt='Field Journal in Admin Pouch of Plate Carrier.'
          height='400'
          width='350'
        />
        <Image 
          src='/journals/field-journal-table.jpeg'
          alt='Field Journals fanned out on tabletop.'
          height='400'
          width='350'
        />
      </div>
    </>
  );
}

export default HardGoodsPage;
