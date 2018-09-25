using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Hacker : MonoBehaviour {

	// Use this for initialization
	void Start () {
        Terminal.WriteLine("Choose your hacking choice");
        Terminal.WriteLine("1:Keep it simple hack your school.");
        Terminal.WriteLine("2:Lets get some money and hack a bank.");
        Terminal.WriteLine("3:Show our skills hack the NSA");
        Terminal.WriteLine("");
        Terminal.WriteLine("Hack the planet!");
        Terminal.WriteLine("Enter your selection: ");
    }
	
	// Update is called once per frame
	void Update () {
		
	}
}
