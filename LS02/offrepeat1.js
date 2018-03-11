function offrepeat(arr){		
		for(var i=0;i<arr.length;i++)
		{
			for(var j=i+1;j<arr.length;j++)
			{
				if(arr[i]==arr[j]){
					arr[j]=arr[arr.length-1];
					arr.length--;
				}
			}
		}
		var brr=arr;
		for(var m=0;m<brr.length;m++)
		{
			for(var n=m+1;n<brr.length;n++)
			{
				if(arr[m]>arr[n])
				{
					var tem=arr[n];
					arr[n]=arr[m];
					arr[m]=tem;
				}
			}
		}
		console.log(brr);
	}

	var crr=[1,2,3,2,3,4,7,1,5,8];
	offrepeat(crr);