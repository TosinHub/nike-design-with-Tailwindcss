

const ShoeCard = ({imgUrl, changeShoe, bigShoeImg}) => {

    const handleClick = () => {
        if(bigShoeImg !== imgUrl.bigShoe){
            changeShoe(imgUrl.bigShoe)
        }
    }

  return (
    <div className={`border-2 rounded-xl 
          ${bigShoeImg == imgUrl.bigShoe ? "border-coral-red  " : "border-transparent"} cursor-pointer max-sm:flex-1
    ` }  onClick={handleClick}>

        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgUrl.thumbnail} alt="shoe collection" width={127} height={37} />
        </div>
    </div>
  )
}

export default ShoeCard